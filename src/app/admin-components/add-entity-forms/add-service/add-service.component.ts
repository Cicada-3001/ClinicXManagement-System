import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceUrl } from 'src/app/Shared/shared';

declare let Swal: any 

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  
  addServiceForm = new FormGroup({
    serviceType: new FormControl('', [Validators.required]),
    serviceName: new FormControl('', [Validators.required]),
    
  })

  constructor(private http:HttpClient) { }

  saveService() {
    let data = this.addServiceForm.value;
    
    this.http.post(ServiceUrl,data)
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
