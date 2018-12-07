import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagaOrdersComponent } from './managa-orders.component';

describe('ManagaOrdersComponent', () => {
  let component: ManagaOrdersComponent;
  let fixture: ComponentFixture<ManagaOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagaOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagaOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
