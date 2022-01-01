import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceModulesComponent } from './place-modules.component';

describe('PlaceModulesComponent', () => {
  let component: PlaceModulesComponent;
  let fixture: ComponentFixture<PlaceModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
