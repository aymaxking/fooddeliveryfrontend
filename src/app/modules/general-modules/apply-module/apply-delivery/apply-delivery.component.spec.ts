import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDeliveryComponent } from './apply-delivery.component';

describe('ApplyDeliveryComponent', () => {
  let component: ApplyDeliveryComponent;
  let fixture: ComponentFixture<ApplyDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
