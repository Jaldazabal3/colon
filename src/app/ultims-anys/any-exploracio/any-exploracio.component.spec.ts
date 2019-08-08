import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyExploracioComponent } from './any-exploracio.component';

describe('AnyExploracioComponent', () => {
  let component: AnyExploracioComponent;
  let fixture: ComponentFixture<AnyExploracioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyExploracioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyExploracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
