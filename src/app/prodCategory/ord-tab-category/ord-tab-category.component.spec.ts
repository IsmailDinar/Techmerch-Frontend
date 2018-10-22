import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdTabCategoryComponent } from './ord-tab-category.component';

describe('OrdTabCategoryComponent', () => {
  let component: OrdTabCategoryComponent;
  let fixture: ComponentFixture<OrdTabCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdTabCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdTabCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
