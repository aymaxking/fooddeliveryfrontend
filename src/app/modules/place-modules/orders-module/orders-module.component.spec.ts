import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersModuleComponent } from './orders-module.component';

describe('OrdersModuleComponent', () => {
  let component: OrdersModuleComponent;
  let fixture: ComponentFixture<OrdersModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
