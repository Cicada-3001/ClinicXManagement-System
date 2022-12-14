import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ApiService } from 'src/API service/API';
import { Clinic } from 'src/app/Shared/shared';


let clinics: Clinic[];

function search(text: string, pipe: PipeTransform): Clinic[] {
  return clinics.filter(clinic => {
    const term = text.toLowerCase();
    return clinic.name.toLowerCase().includes(term)
      || clinic.location.toLowerCase().includes(term)
      || clinic.coordinates.toLowerCase().includes(term)
  });
} 

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})



export class ClinicsComponent {
  data: any;
  clinics$: Observable<Clinic[]>;
  apiService= new ApiService(this.http)
  filter= new FormControl('');
  columns =['Name', 'Location'];
  

  constructor(private http: HttpClient, pipe: DecimalPipe, private router:Router) {
    //this.refreshProperty()
    this.clinics$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text!, pipe))
    );
  }
  ngOnInit(): void {
    this.getClinics()
  }

  getClinics() {
    this.apiService.getClinics().subscribe((Response: any) => {
     this.data = Response;
   }  
 )     
}

}
