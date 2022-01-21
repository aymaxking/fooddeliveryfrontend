import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPlaceComponent } from './apply-place.component';

describe('ApplyPlaceComponent', () => {
  let component: ApplyPlaceComponent;
  let fixture: ComponentFixture<ApplyPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
