import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesCategoryComponent } from './phones-category.component';

describe('PhonesCategoryComponent', () => {
  let component: PhonesCategoryComponent;
  let fixture: ComponentFixture<PhonesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
