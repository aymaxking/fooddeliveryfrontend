import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceModuleComponent } from './place-module.component';

describe('PlaceModuleComponent', () => {
  let component: PlaceModuleComponent;
  let fixture: ComponentFixture<PlaceModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
