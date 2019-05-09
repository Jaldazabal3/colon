import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentsPersonalsComponent } from './antecedents-personals.component';

describe('AntecedentsPersonalsComponent', () => {
  let component: AntecedentsPersonalsComponent;
  let fixture: ComponentFixture<AntecedentsPersonalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentsPersonalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentsPersonalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
