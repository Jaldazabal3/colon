import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentsFamiliarsComponent } from './antecedents-familiars.component';

describe('AntecedentsFamiliarsComponent', () => {
  let component: AntecedentsFamiliarsComponent;
  let fixture: ComponentFixture<AntecedentsFamiliarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentsFamiliarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentsFamiliarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
