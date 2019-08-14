import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerGrauComponent } from './primer-grau.component';

describe('PrimerGrauComponent', () => {
  let component: PrimerGrauComponent;
  let fixture: ComponentFixture<PrimerGrauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerGrauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerGrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
