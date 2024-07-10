import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-request-otp',
  templateUrl: './request-otp.component.html',
  styleUrls: ['./request-otp.component.css']
})
export class RequestOTPComponent {

  email:string='';

  constructor(private authService:AuthServiceService,private router:Router){}

  requestOTP(){
    this.authService.requestOTP(this.email).subscribe(response=>{
      console.log("OTP sent successfully",response);
      // this.router.navigate(['/verifyOTP'],{queryParams:{email:this.email}});
    },
    error=>{
      console.error("OTP sent Failed ,please try again later",error);

    }
  )

  }


}
