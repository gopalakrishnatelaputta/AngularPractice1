
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private authService:AuthServiceService ,private router:Router){}

credentials={
username:'',
password:''
};

login() {
  this.authService.login(this.credentials).subscribe(
    response => {
      console.log("User Authenticated Successfully !!!", response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home']);
    },
    error => {
      console.error("Authentication failed", error);
    }
  );
}

}
