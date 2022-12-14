export interface Option{
    value: number;
    viewValue: string;
}


export interface User{
    userid: number; 
    userPhone: string; 
    userEmail: string; 
    userPassword: string; 
    userType: string; 
}


export interface Clinic{
    id:number; 
    name: string; 
    location:string; 
    coordinates: string;
}



export interface Doctor{
    id: number; 
    firstname: string; 
    lastname: string; 
    speciality: string; 
    clinicId: number; 
}


export interface Patient{
    id: number; 
    firstname: string; 
    lastname: string; 
    address: string; 
    dob: string;
    blood: string;  
}


export interface Equipment{
    id: number; 
    name: string;  
}


export interface Service{
    id: number
    serviceType: string; 
    serviceName: string;
}



export interface Medicine{
    id:number; 
    name: string; 
    location:string; 
    coordinates: string;
}


export interface Appointment{
   id:number;
   appointmentName: string; 
   apppointmentDate: string; 
   appointmentTime: string;
   doctorId: number; 
   clinicId: number; 
   patientId: number;

}

export const ClinicUrl="http://localhost:8060/clinics"
export const DoctorUrl="http://localhost:8060/doctors"
export const PatientUrl = "http://localhost:8060/patients"
export const ServiceUrl="http://localhost:8060/services"
export const AppointmentUrl="http://localhost:8060/appointments"
export const MedicineUrl = "http://localhost:8060/medicines"
export const EquipmentUrl="http://localhost:8060/equipment"
export const UserUrl="http://localhost:8060/users"