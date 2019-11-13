import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentAddressComponent } from './different-address.component';

describe('DifferentAddressComponent', () => {
  let component: DifferentAddressComponent;
  let fixture: ComponentFixture<DifferentAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
