import {Type} from "./type";
import {SubMenu} from "./submenu";
import {Client} from "./client";
import {Delivery} from "./delivery";

export class Commande {
  id?: number;
  date: string;
  heure: string;
  etat:string;
  client:Client;
  delivery:Delivery;
  items?: SubMenu[];
  total :number;

  constructor(date: string,heure: string,etat:string, client:Client, delivery:Delivery, id?: number, submenus?: SubMenu[]) {
    if (id != undefined) {
      this.id = id;
    }
    if (submenus != undefined) {
      this.items = submenus;
    }
    this.date = date;
    this.heure = heure;
    this.client = client;
    this.etat = etat;
    this.delivery = delivery;
    this.total=0;
  }


}
