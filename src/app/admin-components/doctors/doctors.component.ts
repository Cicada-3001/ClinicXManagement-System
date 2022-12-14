import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ApiService } from 'src/API service/API';
import { Doctor } from 'src/app/Shared/shared';


let doctors: Doctor[];

function search(text: string, pipe: PipeTransform): Doctor[] {
  return doctors.filter(doctor => {
    const term = text.toLowerCase();
    return doctor.firstname.toLowerCase().includes(term)
      || doctor.lastname.toLowerCase().includes(term)
      || doctor.speciality.toLowerCase().includes(term)
      || pipe.transform(doctor.clinicId).includes(term)
    
  });
} 




@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  data: any;
  doctors$: Observable<Doctor[]>;
  apiService= new ApiService(this.http)
  filter= new FormControl('');
  columns=['Firstname', 'LastName', 'Speciality']
  

  constructor(private http: HttpClient, pipe: DecimalPipe, private router:Router) {
    //this.refreshProperty()
    this.doctors$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text!, pipe))
    );
  }
  ngOnInit(): void {
    this.getDoctors()
  }

  getDoctors() {
    this.apiService.getDoctors().subscribe((Response: any) => {
     this.data = Response;
   }  
  )    
  } 





}
