import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenorQueCincComponent } from './menor-que-cinc.component';

describe('MenorQueCincComponent', () => {
  let component: MenorQueCincComponent;
  let fixture: ComponentFixture<MenorQueCincComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenorQueCincComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenorQueCincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
