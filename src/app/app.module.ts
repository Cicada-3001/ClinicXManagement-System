import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { LoginComponent } from './auth-components/login/login.component';
import { ForgotPasswordComponent } from './auth-components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth-components/reset-password/reset-password.component';
import { PatientsComponent } from './admin-components/patients/patients.component';
import { ServicesComponent } from './admin-components/services/services.component';
import { AppointmentsComponent } from './admin-components/appointments/appointments.component';
import { DoctorsComponent } from './admin-components/doctors/doctors.component';
import { MedicinesComponent } from './admin-components/medicines/medicines.component';
import { ClinicsComponent } from './admin-components/clinics/clinics.component';
import { PatientHomeComponent } from './patient-components/patient-home/patient-home.component';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';
import { AddClinicComponent } from './admin-components/add-entity-forms/add-clinic/add-clinic.component';
import { AddDoctorComponent } from './admin-components/add-entity-forms/add-doctor/add-doctor.component';
import { AddPatientComponent } from './admin-components/add-entity-forms/add-patient/add-patient.component';
import { AddMedicineComponent } from './admin-components/add-entity-forms/add-medicine/add-medicine.component';
import { AddAppointmentComponent } from './admin-components/add-entity-forms/add-appointment/add-appointment.component';
import { AddServiceComponent } from './admin-components/add-entity-forms/add-service/add-service.component';
import { TestComponent } from './universal-components/test/test.component';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { SidebarComponent } from './universal-components/sidebar/sidebar.component';
import { EquipmentComponent } from './admin-components/equipment/equipment.component';
import { SplashScreenComponent } from './universal-components/splash-screen/splash-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PatientsComponent,
    ServicesComponent,
    AppointmentsComponent,
    DoctorsComponent,
    MedicinesComponent,
    ClinicsComponent,
    PatientHomeComponent,
    AdminHomeComponent,
    AddClinicComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AddMedicineComponent,
    AddAppointmentComponent,
    AddServiceComponent,
    TestComponent,
    DashboardComponent,
    SidebarComponent,
    EquipmentComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
