import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpCopCategoryComponent } from './imp-cop-category.component';

describe('ImpCopCategoryComponent', () => {
  let component: ImpCopCategoryComponent;
  let fixture: ComponentFixture<ImpCopCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpCopCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpCopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
