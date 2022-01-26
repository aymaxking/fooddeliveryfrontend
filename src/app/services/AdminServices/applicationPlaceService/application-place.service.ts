import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApplicationDelivery} from "../../../models/applicationDelivery";
import {applicationDeliveryUrl, applicationPlaceUrl, placesUrl} from "../../../global-variables";
import {ApplicationPlace} from "../../../models/applicationPlace";

@Injectable({
  providedIn: 'root'
})
export class ApplicationPlaceService {

  constructor(private http: HttpClient) { }


  getApplications(): Observable<ApplicationPlace[]> {
    return this.http.get<ApplicationPlace[]>(applicationPlaceUrl)
  }
  getApplicationsByTerm(term:string): Observable<ApplicationPlace[]> {
    return this.http.get<ApplicationPlace[]>(applicationPlaceUrl+"byAll/"+term)
  }
  getApplicationsByTermByPage(term:string,page:number,size:number): Observable<ApplicationPlace[]> {
    return this.http.get<ApplicationPlace[]>(applicationPlaceUrl+"byAll/"+term+"/"+page+"/"+size)
  }

  getApplicationsByPage(page: number, size: number): Observable<ApplicationPlace[]> {
    return this.http.get<ApplicationPlace[]>(applicationPlaceUrl + "page/" + page + "/" + size)
  }


  getApplication(id: number): Observable<ApplicationPlace> {
    return this.http.get<ApplicationPlace>(applicationPlaceUrl + `${id}`)
  }

  deleteApplication(id: string): Observable<any> {
    return this.http.delete(applicationPlaceUrl + `${id}`)
  }

  addApplication(application: ApplicationPlace): Observable<any> {
    return this.http.post<ApplicationPlace>(applicationPlaceUrl, application)
  }

  sendemail(application: ApplicationPlace,type : String): Observable<any> {
    return this.http.put(applicationPlaceUrl + type, application)
  }

  saveApplication(application: ApplicationPlace): Observable<any> {
    return this.http.put(applicationPlaceUrl + `${application.id}`, application)
  }
  finishApplication(application: ApplicationPlace): Observable<any> {
    return this.http.post(placesUrl , application)
  }
}
