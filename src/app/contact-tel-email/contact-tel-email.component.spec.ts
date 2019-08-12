import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTelEmailComponent } from './contact-tel-email.component';

describe('ContactTelEmailComponent', () => {
  let component: ContactTelEmailComponent;
  let fixture: ComponentFixture<ContactTelEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTelEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTelEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
