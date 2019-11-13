import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificativeDataComponent } from './identificative-data.component';

describe('IdentificativeDataComponent', () => {
  let component: IdentificativeDataComponent;
  let fixture: ComponentFixture<IdentificativeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificativeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificativeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
