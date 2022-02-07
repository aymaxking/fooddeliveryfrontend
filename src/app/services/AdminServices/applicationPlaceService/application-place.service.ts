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
      pageMargins: [ 60, 40, 40, 40 ],
      content: [
        {text:'FoodIn',style:'mark', margin: [ 0, 0, 0, 20 ] },
        {text:'Restaurant Management',style:'header', margin: [ 0, 0, 0, 0 ] },
        {text:'Service Agreement',style:'header', margin: [ 0, 0, 0, 20 ] },
        {text:'Parties',style:'header2', margin: [ 15, 0, 0, 20 ] },
        {text:'This RESTAURANT MANAGEMENT SERVICE AGREEMENT dated '+application.date+' between FoodIn and '+application.name+' located at '+application.location
          ,style:'body', margin: [ 0, 0, 0, 20 ] },

        {text:'Services Provided',style:'header2', margin: [ 15, 0, 0, 20 ] },

        {text:'The Provider agrees to render delivery services from the Client’s restaurant to the consumers (“Services”). The Services may be carried out through the use of Provider’s personal vehicle; foot travel by Provider; use of Provider’s personal tablet, mobile, computer, or device; and use of Provider’s personal bicycle.'
          ,style:'body', margin: [ 0, 0, 0, 20 ] },
        {text:'Terms And Conditions',style:'header2', margin: [ 15, 0, 0, 20 ] },
        {text:'.Term: '
          ,style:'header3', margin: [ 0, 0, 0, 5 ] },
        {text:'This Agreement will be effective starting the Effective Date, and will continue in full force until its termination date, which is March 24, 2022 (“Termination Date”). '
          ,style:'body', margin: [ 5, 0, 0, 20 ] },
        {text:'.Payement for Services: '
          ,style:'header3', margin: [ 0, 0, 0, 5 ] },
        {text:'The Client will pay the Provider the amount that is mutually negotiated between the Parties (“Compensation Rate”). The Compensation Rate will depend on the delivery opportunities accepted by the Provider, the time and distance to accomplish the Service, the supplier’s historical performance, and the payment behavior of the consumer.'
          ,style:'body', margin: [ 5, 0, 0, 20 ] },
        {text:'.Expenses: '
          ,style:'header3', margin: [ 0, 0, 0, 5 ] },
        {text:'The Provider will be responsible for all the expenses incurred with respect to the performance of the Services, including but not limited to, gasoline, maintenance of the Provider’s vehicle, cellular device and data costs, and insurance coverage. The Client may shoulder any of these if agreed upon by both Parties in writing.'
          ,style:'body', margin: [ 5, 0, 0, 20 ] },
        {text:'.General Industry Standards: '
          ,style:'header3', margin: [ 0, 0, 0, 5 ] },
        {text:'It is mutually agreed between the Parties that the Provider is an independent contractor, but the Provider must conform with the norms of the certain standards of the delivery industry. These norms include, but are not limited to, the safe handling of food and non-food items according to the consumer’s request through the platform, the Provider’s relationship with the Client and the suppliers, and the privacy of the consumer’s information.'
          ,style:'body', margin: [ 5, 0, 0, 20 ] },
        {text:'.Consumer Industry Standards: '
          ,style:'header3', margin: [ 0, 0, 0, 5 ] },
        {text:'The Provider may be an independent contractor, but the Provider is also performing the Services on the Client’s behalf. Therefore, the consumer has the right to hold the Provider responsible for the norms with respect to the Services provided. These norms may include, but are not limited to, providing the Services in a timely, professional, and safe manner with the observance of the General Industry Standards; and delivering door-to-door from the supplier to the consumer with respect to the legal and logistical limitations.'
          ,style:'body', margin: [ 5, 0, 0, 20 ] },
        {text:'.Termination: '
          ,style:'header3', margin: [ 0, 0, 0, 5 ] },
        {text:'This Agreement will automatically terminate on the Termination Date and upon breach of any of the provisions in this Agreement. However, either party may terminate this Agreement earlier by providing at least seven (7) days’ written notice to the other party. The Provider is not allowed to accept opportunities during the seven days of the notice period.'
          ,style:'body', margin: [ 5, 0, 0, 20 ] },

        {text:'Signature',style:'header2', margin: [ 15, 0, 0, 20 ] },
        {text:'Provider                                                                                                        Client',
          style:'body', margin: [ 40, 0, 0, 20 ] },

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
        header3: {
          alignment: 'left',
          fontSize: 12,
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
