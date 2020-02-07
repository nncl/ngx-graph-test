import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LAZY_WIDGETS } from './services/LazyLoader/tokens';
import { lazyArrayToObj, lazyWidgets } from './services/LazyLoader/lazy-widgets';
import { LazyLoaderService } from './services/LazyLoader/lazy-loader.service';
import { provideRoutes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LAZY_WIDGETS, useFactory: lazyArrayToObj}, LazyLoaderService, provideRoutes(lazyWidgets)],
  bootstrap: [AppComponent]
})
export class AppModule {
}
