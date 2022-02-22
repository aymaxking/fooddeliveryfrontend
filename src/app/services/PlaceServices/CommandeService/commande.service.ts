import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../../../models/place";
import {clientsUrl, commandesUrl, menusUrl, placesUrl, submenusUrl} from "../../../global-variables";
import {Menu} from "../../../models/menu";
import {SubMenu} from "../../../models/submenu";
import {Client} from "../../../models/client";
import {Commande} from "../../../models/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(commandesUrl+"place/"+localStorage.getItem("currentuser"))
  }

  getCommandesByPage(page:number,size:number): Observable<Commande[]> {
    return this.http.get<Commande[]>(commandesUrl+"place/"+localStorage.getItem("currentuser")+"/page/"+page+"/"+size)
  }

}



