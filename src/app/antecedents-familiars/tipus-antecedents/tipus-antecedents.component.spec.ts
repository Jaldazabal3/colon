import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipusAntecedentsComponent } from './tipus-antecedents.component';

describe('TipusAntecedentsComponent', () => {
  let component: TipusAntecedentsComponent;
  let fixture: ComponentFixture<TipusAntecedentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipusAntecedentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipusAntecedentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
