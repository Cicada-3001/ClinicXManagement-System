import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorUrl } from 'src/app/Shared/shared';

declare let Swal: any


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  
  addPatientForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    blood: new FormControl('', [Validators.required])
  })

  constructor(private http:HttpClient) { }

  
  saveDoctor() {
    let data = this.addPatientForm.value;
    
    this.http.post(DoctorUrl,data)
    .subscribe(Result => {
      if (1) {
        Swal.fire(
       'Success!',
        Result,
       'success'
     )
     } else if (!1) {
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: Result
       })
     } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a>Why do I have this issue?</a>'
      })
     }
     })
  }













}
