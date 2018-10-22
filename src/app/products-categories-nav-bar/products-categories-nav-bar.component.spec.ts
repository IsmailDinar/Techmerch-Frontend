import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoriesNavBarComponent } from './products-categories-nav-bar.component';

describe('ProductsCategoriesNavBarComponent', () => {
  let component: ProductsCategoriesNavBarComponent;
  let fixture: ComponentFixture<ProductsCategoriesNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCategoriesNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoriesNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
