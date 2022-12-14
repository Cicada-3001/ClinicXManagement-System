import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import { ApiService } from 'src/API service/API';
declare let Swal: any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any

  constructor(private http: HttpClient,  private router:Router) { }

  loginForm= new FormGroup({   
    emailAddress: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  apiService= new ApiService(this.http)
  
  emailAddress=this.loginForm.get('emailAddress')
  password=this.loginForm.get('password')
     
  loginUser() {
    try {
      this.apiService.emailLogin(this.emailAddress?.value,this.password?.value).subscribe((Result: any) => {
      console.log(Result)
      
      console.log(Result)
      
      if (1) {
       // this.showSplash = true
        sessionStorage.setItem('user', JSON.stringify(this.user))
        setTimeout(() => {
          this.router.navigate(['/admin/dashboard']);
        }, 3200)

        
      } else if (0) {
       // this.loginError=this.report
      }
    })
    }

    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a>Why do I have this issue?</a>'
      }) 
    }
    
  }
   
  setSplash($event: string) {
    switch ($event) {
      case 'splash':
        //this.showSplash = true
        break;
      case 'login':
        //this.phoneSign = false
    }
    
  }

}
