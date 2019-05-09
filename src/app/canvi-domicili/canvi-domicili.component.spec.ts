import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanviDomiciliComponent } from './canvi-domicili.component';

describe('CanviDomiciliComponent', () => {
  let component: CanviDomiciliComponent;
  let fixture: ComponentFixture<CanviDomiciliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanviDomiciliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanviDomiciliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
