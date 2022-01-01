import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModulesComponent } from './general-modules.component';

describe('GeneralModulesComponent', () => {
  let component: GeneralModulesComponent;
  let fixture: ComponentFixture<GeneralModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
