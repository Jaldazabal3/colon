import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultesComponent } from './consultes.component';

describe('ConsultesComponent', () => {
  let component: ConsultesComponent;
  let fixture: ComponentFixture<ConsultesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
