import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimsAnysComponent } from './ultims-anys.component';

describe('UltimsAnysComponent', () => {
  let component: UltimsAnysComponent;
  let fixture: ComponentFixture<UltimsAnysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimsAnysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimsAnysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
