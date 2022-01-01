import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyModuleComponent } from './apply-module.component';

describe('ApplyModuleComponent', () => {
  let component: ApplyModuleComponent;
  let fixture: ComponentFixture<ApplyModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
