import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdudaComponent } from './perduda.component';

describe('PerdudaComponent', () => {
  let component: PerdudaComponent;
  let fixture: ComponentFixture<PerdudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
