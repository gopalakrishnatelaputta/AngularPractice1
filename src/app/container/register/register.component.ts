import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: ''
  };

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log("User Successfully Registered", response);
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Registration failed', error);
      }
    );
  }
}
