import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: { name: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    name: 'lazyloadmodulecomponent',
    loadChildren: () => import('../../lazyloadmodulecomponent/lazyloadmodulecomponent.module').then(m => m.LazyloadmodulecomponentModule)
  }
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.name] = w.loadChildren;
  }
  return result;
}
