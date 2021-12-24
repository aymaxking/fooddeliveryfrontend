import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModuleComponent } from './category-module.component';

describe('CategoryModuleComponent', () => {
  let component: CategoryModuleComponent;
  let fixture: ComponentFixture<CategoryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
