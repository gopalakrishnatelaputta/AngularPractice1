import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

  email:string='';
  newPassword:string='';

  constructor(private authService:AuthServiceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.email=this.route.snapshot.queryParams['email'];

  }

  resetPassword(email:string,newPassword:string){
      this.authService.resetPassword(this.email,this.newPassword).subscribe(response=>{
        console.log("Password reset Successfully completed !!",response);
        this.router.navigate(['/login']);
      },error=>{
        console.log("Failed to reset NewPassword",error);
      });
  }

}
