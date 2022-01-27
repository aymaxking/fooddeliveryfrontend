import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApplicationDelivery} from "../../../models/applicationDelivery";
import {applicationDeliveryUrl, applicationPlaceUrl, placesUrl} from "../../../global-variables";
import {ApplicationPlace} from "../../../models/applicationPlace";
// @ts-ignore
import pdfMake from "pdfmake/build/pdfmake";
// @ts-ignore
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  showcontract(application: ApplicationPlace): void {
    let docDefinition = {
      pageMargins: [ 60, 40, 60, 40 ],
      content: [
        {text:'FoodIn',style:'mark', margin: [ 0, 0, 0, 20 ] },
        {text:'Restaurant Management',style:'header', margin: [ 0, 0, 0, 0 ] },
        {text:'Service Agreement',style:'header', margin: [ 0, 0, 0, 20 ] },
        {text:'Parties',style:'header2', margin: [ 0, 0, 0, 20 ] },
        {text:'This RESTAURANT MANAGEMENT SERVICE AGREEMENT dated '+application.date+
            ' sis made by and between FoodIn and  '+application.name+
            ' located at '
          ,style:'body', margin: [ 0, 0, 0, 20 ] },

        {text:'Services Provided',style:'header2', margin: [ 0, 0, 0, 20 ] },

        {text:'Terms And Conditions',style:'header2', margin: [ 0, 0, 0, 20 ] },


      ],

      styles: {
        header: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
        },
        mark: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
        },
        header2: {
          alignment: 'left',
          fontSize: 14,
          bold: true,
        },
        body: {
          alignment: 'left',
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
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
