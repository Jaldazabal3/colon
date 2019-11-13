import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExploracioComponent } from './info-exploracio.component';

describe('InfoExploracioComponent', () => {
  let component: InfoExploracioComponent;
  let fixture: ComponentFixture<InfoExploracioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoExploracioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoExploracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
