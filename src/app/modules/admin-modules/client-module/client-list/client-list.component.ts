import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/category";
import {Client} from "../../../../models/client";
import {ClientService} from "../../../../services/AdminServices/clientService/client.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  // @ts-ignore
  allclients: Client[];
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getData(0)
  }

  getData(p:number){
    if(this.name=="") {
      this.clientService.getClients().subscribe((data: Client[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.clientService.getClientsByPage(p, this.size).subscribe((data: Client[]) => {
        this.allclients = data;
      })
      this.currentpage = p;
    }
    else{
      this.clientService.getClientsByTerm(this.name).subscribe((data: Client[]) => {
        this.maxpages=Math.ceil(data.length/this.size);
        this.totalElements= Array.from(Array(this.maxpages).keys());
      })
      this.clientService.getClientsByTermByPage(this.name,p,this.size).subscribe((data: Client[]) => {
        this.allclients = data;
      })
      this.currentpage=p;
    }
  }

}
