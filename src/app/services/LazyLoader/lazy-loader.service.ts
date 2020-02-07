import {
  Injectable,
  Compiler,
  Injector,
  Type,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgModuleFactory,
  Inject
} from '@angular/core';
import { LAZY_WIDGETS } from './tokens';
import { lazyWidgets } from './lazy-widgets';

@Injectable()
export class LazyLoaderService {

  constructor(private injector: Injector,
              private compiler: Compiler,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(LAZY_WIDGETS) private lazyWidgets: { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> }) {
  }


  async load(name: string, container: ViewContainerRef) {
    const ngModuleOrNgModuleFactory = await this.lazyWidgets[name]();

    let moduleFactory;

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      moduleFactory = await this.compiler.compileModuleAsync(ngModuleOrNgModuleFactory);
    }

    const entryComponent = (moduleFactory.moduleType as any).entry;
    const moduleRef = moduleFactory.create(this.injector);

    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

    const comp = container.createComponent(compFactory);
  }

}
