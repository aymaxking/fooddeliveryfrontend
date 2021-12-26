import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {categoriesUrl, clientsUrl} from "../../../global-variables";
import {Client} from "../../../models/client";
import {Category} from "../../../models/category";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(clientsUrl)
  }

  getClientsByPage(page:number,size:number): Observable<Client[]> {
    return this.http.get<Client[]>(clientsUrl+"page/"+page+"/"+size)
  }

  getClientsByTerm(term:string): Observable<Client[]> {
    return this.http.get<Client[]>(clientsUrl+"byAll/"+term)
  }
  getClientsByTermByPage(term:string,page:number,size:number): Observable<Client[]> {
    return this.http.get<Client[]>(clientsUrl+"byAll/"+term+"/"+page+"/"+size)
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
