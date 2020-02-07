import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoaderService } from './services/LazyLoader/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;


  constructor(private loader: LazyLoaderService) {
  }

  ngOnInit(): void {
    setTimeout(() => this.load(), 2000);
  }

  load() {
    this.container.clear();
    this.loader.load('lazyloadmodulecomponent', this.container);
  }
}
