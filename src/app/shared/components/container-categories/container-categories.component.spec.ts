import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCategoriesComponent } from './container-categories.component';

describe('ContainerCategoriesComponent', () => {
  let component: ContainerCategoriesComponent;
  let fixture: ComponentFixture<ContainerCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
