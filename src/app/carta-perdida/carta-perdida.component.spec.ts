import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPerdidaComponent } from './carta-perdida.component';

describe('CartaPerdidaComponent', () => {
  let component: CartaPerdidaComponent;
  let fixture: ComponentFixture<CartaPerdidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPerdidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaPerdidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
