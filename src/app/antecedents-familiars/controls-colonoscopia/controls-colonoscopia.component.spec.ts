import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsColonoscopiaComponent } from './controls-colonoscopia.component';

describe('ControlsColonoscopiaComponent', () => {
  let component: ControlsColonoscopiaComponent;
  let fixture: ComponentFixture<ControlsColonoscopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsColonoscopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsColonoscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
