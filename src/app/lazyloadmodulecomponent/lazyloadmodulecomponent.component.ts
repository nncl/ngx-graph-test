import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloadmodulecomponent',
  templateUrl: './lazyloadmodulecomponent.component.html',
  styleUrls: ['./lazyloadmodulecomponent.component.scss']
})
export class LazyloadmodulecomponentComponent implements OnInit {
  single: any[] = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    }
  ];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    const {single} = this;
    Object.assign(this, {single});
  }

  ngOnInit() {
  }


  onSelect(event) {
    console.log(event);
  }

}
