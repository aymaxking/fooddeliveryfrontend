import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {deliveriesUrl} from "../../../global-variables";
import {Delivery} from "../../../models/delivery";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(deliveriesUrl)
  }

  getDelivery(id: number): Observable<Delivery> {
    return this.http.get<Delivery>(deliveriesUrl+`${id}`)
  }

  deleteDelivery(id: string): Observable<any> {
    return this.http.delete(deliveriesUrl+`${id}`)
  }

  saveDelivery(delivery: Delivery): Observable<any> {
    return this.http.put(deliveriesUrl+`${delivery.id}`, delivery)
  }
}
