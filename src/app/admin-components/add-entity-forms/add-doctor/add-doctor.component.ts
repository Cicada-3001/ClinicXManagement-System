import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorUrl } from 'src/app/Shared/shared';

declare let Swal: any

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  addDoctorForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    speciality: new FormControl('', [Validators.required]),
    clinicId: new FormControl('', [Validators.required])
  })

  constructor(private http:HttpClient) { }

  
  saveDoctor() {
    let data = this.addDoctorForm.value;
    
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
