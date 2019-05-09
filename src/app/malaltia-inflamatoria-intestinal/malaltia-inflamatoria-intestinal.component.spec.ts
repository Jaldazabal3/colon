import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalaltiaInflamatoriaIntestinalComponent } from './malaltia-inflamatoria-intestinal.component';

describe('MalaltiaInflamatoriaIntestinalComponent', () => {
  let component: MalaltiaInflamatoriaIntestinalComponent;
  let fixture: ComponentFixture<MalaltiaInflamatoriaIntestinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalaltiaInflamatoriaIntestinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalaltiaInflamatoriaIntestinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
