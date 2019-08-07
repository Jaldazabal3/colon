import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsPerdutsComponent } from './resultats-perduts.component';

describe('ResultatsPerdutsComponent', () => {
  let component: ResultatsPerdutsComponent;
  let fixture: ComponentFixture<ResultatsPerdutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsPerdutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsPerdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
