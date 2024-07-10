import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: FormGroup;
  backendMessage: string;

  constructor(private authService: AuthServiceService, private router: Router,private formBuilder:FormBuilder) {}


  // user = {
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   password: '',
  //   email: ''
  // };


  ngOnInit(): void {
    this.user=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.nullValidator]],
      lastName:[''],
      username:['',[Validators.required,Validators.minLength(4)],this.asyncUsernameValidator.bind(this),Validators.nullValidator],
      password:['',[Validators.required,Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],this.asyncPasswordValidator.bind(this),
        Validators.nullValidator],
      confirmPassword:[''],
      email:['',[Validators.required,Validators.email,Validators.nullValidator]],

    })
  }
  
  

  onSubmit() {
    const formData=this.user.value;
    this.authService.register(formData).subscribe(
      response => {
        console.log("User Successfully Registered", response);
        this.backendMessage = response.message;
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Registration failed', error);
      }
    );
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { required: true };
    }
    if (control.value.length < 8) {
      return { minlength: { requiredLength: 8, actualLength: control.value.length } };
    }
   
    return null;
  }

  asyncPasswordValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!control.value || control.value !== 'password') {
          resolve({ invalidPassword: true });
        } else {
          resolve(null);
        }
      }, 1000); 
    });
  }

  asyncUsernameValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!control.value || control.value !== 'username') {
          resolve({ invalidUsername: true });
        } else {
          resolve(null);
        }
      }, 1000); 
    });
  }

}
