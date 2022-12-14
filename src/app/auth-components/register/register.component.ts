import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Option, UserUrl } from 'src/app/Shared/shared';
import {ReactiveFormsModule} from '@angular/forms'
declare let Swal: any



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient,  private router:Router) { }
  user: any;
  userTypes: Option[] = [
    { value: 1, viewValue: 'Doctor' },
    { value: 2, viewValue: 'Patient' },
  ]
  
  MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    userType: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_psw: new FormControl('', [Validators.required])
  },
    [this.MatchValidator('password', 'confirm_psw')]
  )

  firstName = this.signUpForm.get('firstName')
  lastName  = this.signUpForm.get('lastname')
  userPhone = this.signUpForm.get('phoneNumber')
  userEmail = this.signUpForm.get('emailAddress')
  userType = this.signUpForm.get('userType')
  userPassword = this.signUpForm.get('password')
  get passwordMatchError() {
    return (
      this.signUpForm.getError('mismatch') &&
      this.signUpForm.get('confirm_psw')?.touched
    );
  }

  registerUser() {
    this.user = {
      userId: 4,
      userPhone: this.userPhone?.value,
      userEmail: this.userEmail?.value,
      userPassword: this.userPassword?.value,
      userType: this.userType?.value,
    }
  
    try {
      this.http.post(UserUrl,this.user)
        .subscribe(Result => {
          console.log(Result)
          let val: any = Result
          
          if (true) {
           // this.showSplash = true
            sessionStorage.setItem('user',JSON.stringify(val.data))
            console.log(val.data)
            setTimeout(() => {
              this.router.navigate(['/admin/dashboard']);
            }, 3200)
          } else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: Result,
            })
          }
        })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a>Why do I have this issue?</a>'
      })
    }
  }




}
