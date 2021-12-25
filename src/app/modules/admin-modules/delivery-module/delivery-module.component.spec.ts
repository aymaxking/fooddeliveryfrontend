import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryModuleComponent } from './delivery-module.component';

describe('DeliveryModuleComponent', () => {
  let component: DeliveryModuleComponent;
  let fixture: ComponentFixture<DeliveryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
