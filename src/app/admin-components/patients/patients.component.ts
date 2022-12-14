import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ApiService } from 'src/API service/API';
import { Patient } from 'src/app/Shared/shared';



let patients: Patient[]= []

function search(text: string, pipe: PipeTransform): Patient[] {
  return patients.filter(patient => {
    const term = text.toLowerCase();
    return patient.firstname.toLowerCase().includes(term)
      || patient.lastname.toLowerCase().includes(term)
      || patient.address.toLowerCase().includes(term)
      || patient.dob.toLowerCase().includes(term)
      || patient.blood.toLowerCase().includes(term)
  });
} 




@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})



export class PatientsComponent {
  data: any;
  patients$: Observable<Patient[]>;
  apiService= new ApiService(this.http)
  filter= new FormControl('');
  columns= ['Firstname', 'Lastname', 'Address']
  

  constructor(private http: HttpClient, pipe: DecimalPipe, private router:Router) {
    //this.refreshProperty()
    this.patients$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text!, pipe))
    );
  }
  ngOnInit(): void {
    this.getPatients()
  }

  getPatients() {
    this.apiService.getPatients().subscribe((Response: any) => {
     this.data = Response;
   }  
 )     
 }
  








}
