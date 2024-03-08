import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseObservableComponent } from './promise-observable.component';

describe('PromiseObservableComponent', () => {
  let component: PromiseObservableComponent;
  let fixture: ComponentFixture<PromiseObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromiseObservableComponent]
    });
    fixture = TestBed.createComponent(PromiseObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
