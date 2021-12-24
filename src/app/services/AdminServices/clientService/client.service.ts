import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {clientsUrl} from "../../../global-variables";
import {Client} from "../../../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(clientsUrl)
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(clientsUrl+`${id}`)
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(clientsUrl+`${id}`)
  }

  saveClient(client: Client): Observable<any> {
    return this.http.put(clientsUrl+`${client.id}`, client)
  }
}
