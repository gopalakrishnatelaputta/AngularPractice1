import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOTPComponent } from './request-otp.component';

describe('RequestOTPComponent', () => {
  let component: RequestOTPComponent;
  let fixture: ComponentFixture<RequestOTPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestOTPComponent]
    });
    fixture = TestBed.createComponent(RequestOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
