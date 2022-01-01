import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsModuleComponent } from './locations-module.component';

describe('LocationsModuleComponent', () => {
  let component: LocationsModuleComponent;
  let fixture: ComponentFixture<LocationsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
