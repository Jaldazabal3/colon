import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRebudaComponent } from './no-rebuda.component';

describe('NoRebudaComponent', () => {
  let component: NoRebudaComponent;
  let fixture: ComponentFixture<NoRebudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRebudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRebudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
