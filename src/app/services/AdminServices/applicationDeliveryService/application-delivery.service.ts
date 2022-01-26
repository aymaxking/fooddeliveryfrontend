import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../../models/category";
import {applicationDeliveryUrl, categoriesUrl, clientsUrl, deliveriesUrl, placesUrl} from "../../../global-variables";
import {HttpClient} from "@angular/common/http";
import {ApplicationDelivery} from "../../../models/applicationDelivery";
import {Client} from "../../../models/client";

@Injectable({
  providedIn: 'root'
})
export class ApplicationDeliveryService {

  constructor(private http: HttpClient) { }


  getApplications(): Observable<ApplicationDelivery[]> {
    return this.http.get<ApplicationDelivery[]>(applicationDeliveryUrl)
  }

  getApplicationsByTerm(term:string): Observable<ApplicationDelivery[]> {
    return this.http.get<ApplicationDelivery[]>(applicationDeliveryUrl+"byAll/"+term)
  }
  getApplicationsByTermByPage(term:string,page:number,size:number): Observable<ApplicationDelivery[]> {
    return this.http.get<ApplicationDelivery[]>(applicationDeliveryUrl+"byAll/"+term+"/"+page+"/"+size)
  }

  getApplicationsByPage(page: number, size: number): Observable<ApplicationDelivery[]> {
    return this.http.get<ApplicationDelivery[]>(applicationDeliveryUrl + "page/" + page + "/" + size)
  }


  getApplication(id: number): Observable<ApplicationDelivery> {
    return this.http.get<ApplicationDelivery>(applicationDeliveryUrl + `${id}`)
  }

  deleteApplication(id: string): Observable<any> {
    return this.http.delete(applicationDeliveryUrl + `${id}`)
  }

  addApplication(application: ApplicationDelivery): Observable<any> {
    return this.http.post<ApplicationDelivery>(applicationDeliveryUrl, application)
  }

  saveApplication(application: ApplicationDelivery): Observable<any> {
    return this.http.put(applicationDeliveryUrl + `${application.id}`, application)
  }

  sendemail(application: ApplicationDelivery,type : String): Observable<any> {
    return this.http.put(applicationDeliveryUrl + type, application)
  }

  showcontract(application: ApplicationDelivery): Observable<any> {
    // @ts-ignore
    return this.http.get(applicationDeliveryUrl +'generateContract', application)
  }

  finishApplication(application: ApplicationDelivery): Observable<any> {
    return this.http.post(deliveriesUrl , application)
  }

}
