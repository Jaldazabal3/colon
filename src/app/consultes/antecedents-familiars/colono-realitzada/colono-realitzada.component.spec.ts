import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonoRealitzadaComponent } from './colono-realitzada.component';

describe('ColonoRealitzadaComponent', () => {
  let component: ColonoRealitzadaComponent;
  let fixture: ComponentFixture<ColonoRealitzadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColonoRealitzadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonoRealitzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
