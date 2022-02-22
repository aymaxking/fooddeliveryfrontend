import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../../models/commande";
import {CommandeService} from "../../../../services/PlaceServices/CommandeService/commande.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  // @ts-ignore
  allorders: Commande[];
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";
  commandePopupDisplayStyle = "none";
  currentCommande:Commande = Object();
  constructor(private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.getData(0)
  }
  getData(p:number){
      this.commandeService.getCommandes().subscribe((data: Commande[]) => {
        console.log(data)
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.commandeService.getCommandesByPage(p, this.size).subscribe((data: Commande[]) => {
        this.allorders = data;
      })
      this.currentpage = p;
  }

  openPopup(commande:Commande){
    this.commandePopupDisplayStyle = "block";
    this.currentCommande=commande;
  }
  closePopup() {
    this.commandePopupDisplayStyle = "none";
  }
  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }
}
