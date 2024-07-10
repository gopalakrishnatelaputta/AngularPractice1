import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  otpRequested: boolean = false;
  emailOTP: string;

  constructor(private authService: AuthServiceService, private router: Router) {}

  requestOTP() {
    this.authService.requestOTP(this.email).subscribe(
      response => {
        console.log("OTP requested successfully", response);
        this.router.navigate(['/verifyOTP'],{queryParams:{email:this.email}} );
      },
      error => {
        console.error("Failed to request OTP", error);
      }
    );
  }

}
