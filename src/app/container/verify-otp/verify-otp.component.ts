import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOTPComponent implements OnInit{

  email:string='';
  otp:string='';

  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.email=this.route.snapshot.queryParams['email']
  }

  verifyOTP() {
    this.authService.verifyOTP(this.email, this.otp).subscribe(
      response => {
        console.log("OTP verified successfully", response);
        this.router.navigate(['/reset-password'], { queryParams: { email: this.email } });
      },
      error => {
        console.error("Failed to verify OTP", error);
      }
    );
  }
 


}
