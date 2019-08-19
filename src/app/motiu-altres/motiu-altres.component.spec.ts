import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotiuAltresComponent } from './motiu-altres.component';

describe('MotiuAltresComponent', () => {
  let component: MotiuAltresComponent;
  let fixture: ComponentFixture<MotiuAltresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotiuAltresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotiuAltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
