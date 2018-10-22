import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCategoryComponent } from './access-category.component';

describe('AccessCategoryComponent', () => {
  let component: AccessCategoryComponent;
  let fixture: ComponentFixture<AccessCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
