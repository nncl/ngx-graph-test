import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadmodulecomponentComponent } from './lazyloadmodulecomponent.component';
import { BarChartModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [LazyloadmodulecomponentComponent],
  entryComponents: [LazyloadmodulecomponentComponent],
  imports: [
    CommonModule,
    BarChartModule
  ]
})
export class LazyloadmodulecomponentModule {
  static entry = LazyloadmodulecomponentComponent;
}
