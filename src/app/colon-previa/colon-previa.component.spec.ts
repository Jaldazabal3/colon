import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonPreviaComponent } from './colon-previa.component';

describe('ColonPreviaComponent', () => {
  let component: ColonPreviaComponent;
  let fixture: ComponentFixture<ColonPreviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonPreviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
