import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, Validators, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsumerService } from '../../services/consumer.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,
    ReactiveFormsModule],
  providers: [ConsumerService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  //validations:
  logInForm: FormGroup;
  signUpForm: FormGroup;
  user: User = {
    email: "",
    password:"",
    firstName:"",
    lastName:""
  };

  formSubmitted: boolean = false;
  useLogInForm: boolean = true;
  invalidUser: boolean = false;
  emailUsed: boolean = false;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(private consumerService: ConsumerService) {
    this.logInForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z]*$")]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z]*$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  signUp() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      this.user.email = this.signUpForm.get('email')?.value;
      this.user.firstName = this.signUpForm.get('firstName')?.value;
      this.user.lastName = this.signUpForm.get('lastName')?.value;
      this.user.password = this.signUpForm.get('password')?.value;
      this.consumerService.signUp(this.user)
        .subscribe({
          next: (response) =>{
            this.user = response;
            if(this.user == null){
              this.emailUsed = true;
              console.log('email is used by another account');
            }else{
              this.emailUsed = false;
              console.log(response);
            }
          },
          error: (e) =>{
            if(e.status === 409){
              this.emailUsed = true;
              console.log('email is already in use');
            }else{
              console.log(e);
              alert('something went wrong, please try again later')
            }
          }
        })
      
    }else{
      console.log('invalid sign up form');
    }
  }

  logIn() {
    this.logInForm.markAllAsTouched();
    if (this.logInForm.valid) {
      console.log('log in form is valid');
      this.email = this.logInForm.get('email')?.value;
      this.password = this.logInForm.get('password')?.value;

      this.consumerService.logIn(this.email, this.password)
        .subscribe({
          next: (response) => {
            this.user = response;
            if(this.user == null){
              this.invalidUser = true;
              console.log('invalid user');
            }else{
              this.invalidUser = false;
              console.log(response)
            }
          },
          error: (e) => {
            if(e.status === 401){
              this.invalidUser = true;
            }else{
              console.log(e);
              alert('something went wrong, please try again later');
            }
          },
          complete: () => console.log('login completed')
        })
    } else {
      console.log('invalid login form');
    }
  }
}
