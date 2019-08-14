import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlcerosaCrohnComponent } from './ulcerosa-crohn.component';

describe('UlcerosaCrohnComponent', () => {
  let component: UlcerosaCrohnComponent;
  let fixture: ComponentFixture<UlcerosaCrohnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlcerosaCrohnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlcerosaCrohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
