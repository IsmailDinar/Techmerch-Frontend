import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageCategoryComponent } from './stockage-category.component';

describe('StockageCategoryComponent', () => {
  let component: StockageCategoryComponent;
  let fixture: ComponentFixture<StockageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
