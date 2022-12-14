import { AppointmentUrl, ClinicUrl, DoctorUrl, EquipmentUrl, MedicineUrl, PatientUrl, ServiceUrl, UserUrl } from "src/app/Shared/shared";
import { HttpClient, HttpParams } from "@angular/common/http";

export class ApiService {
    constructor(private http: HttpClient) { }
    data:any
    getClinics(): any {
        // let queryParams = new HttpParams();
        // = queryParams.append("propertyManagerID", propertyManagerID);
        return  this.http.get(ClinicUrl);
    }

    getDoctors():any{
       // let queryParams = new HttpParams();
       // queryParams = queryParams.append("propertyID", val);
        return this.http.get(DoctorUrl)
    }

    getAppointments():any{
        //let queryParams = new HttpParams();
        //queryParams = queryParams.append("propertyManagerID", propertyManagerID);
        return this.http.get(AppointmentUrl) 
    }    
    
    getServices(): any {
       // let queryParams = new HttpParams();
       // queryParams = queryParams.append("propertyManagerID", propertyManagerID);
        return  this.http.get(ServiceUrl)
    }

    getUsers(val:number):any{
        //let queryParams = new HttpParams();
       // queryParams = queryParams.append("propertyID", val);
        return this.http.get(UserUrl)
    }

    getMedicines():any{
       // let queryParams = new HttpParams();
       // queryParams = queryParams.append("propertyManagerID", propertyManagerID);
        return this.http.get(MedicineUrl) 
    }    


    getEquipment():any{
        //let queryParams = new HttpParams();
       // queryParams = queryParams.append("propertyManagerID", propertyManagerID);
        return this.http.get(EquipmentUrl) 
    }    


    getPatients():any{
        //let queryParams = new HttpParams();
       // queryParams = queryParams.append("propertyManagerID", propertyManagerID);
        return this.http.get(PatientUrl) 
    }    





    emailLogin(email:any, password:any):any{
        let queryParams = new HttpParams();
        queryParams = queryParams.append("emailAddress", email)
        queryParams = queryParams.append("password", password)
        return this.http.get("http://178.79.146.213:8080/smart-real-estate-backend/users/login-propertymanageruser-by-emailaddress", { params: queryParams })
    }
}


