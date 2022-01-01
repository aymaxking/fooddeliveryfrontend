import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {categoriesUrl, clientsUrl, deliveriesUrl} from "../../../global-variables";
import {Delivery} from "../../../models/delivery";
import {Client} from "../../../models/client";
import {Category} from "../../../models/category";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) {
  }

  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(deliveriesUrl)
  }

  getDeliveriesByPage(page: number, size: number): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(deliveriesUrl + "page/" + page + "/" + size)
  }

  getDeliveriesByTerm(term: string): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(deliveriesUrl + "byAll/" + term)
  }

  getDeliveriesByTermByPage(term: string, page: number, size: number): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(deliveriesUrl + "byAll/" + term + "/" + page + "/" + size)
  }


  getDelivery(id: number): Observable<Delivery> {
    return this.http.get<Delivery>(deliveriesUrl + `${id}`)
  }

  addDelivery(delivery: Delivery): Observable<any> {
    return this.http.post<Delivery>(deliveriesUrl, delivery)
  }

  deleteDelivery(id: string): Observable<any> {
    return this.http.delete(deliveriesUrl + `${id}`)
  }

  saveDelivery(delivery: Delivery): Observable<any> {
    return this.http.put(deliveriesUrl + `${delivery.id}`, delivery)
  }
}
