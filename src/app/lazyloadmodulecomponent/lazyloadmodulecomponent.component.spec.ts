import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadmodulecomponentComponent } from './lazyloadmodulecomponent.component';

describe('LazyloadmodulecomponentComponent', () => {
  let component: LazyloadmodulecomponentComponent;
  let fixture: ComponentFixture<LazyloadmodulecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadmodulecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadmodulecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
