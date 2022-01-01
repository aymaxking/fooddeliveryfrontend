import { Component, OnInit } from '@angular/core';
import {Client} from "../../../../models/client";
import {ClientService} from "../../../../services/AdminServices/clientService/client.service";
import {ApplicationDelivery} from "../../../../models/applicationDelivery";
import {ApplicationDeliveryService} from "../../../../services/AdminServices/applicationDeliveryService/application-delivery.service";

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {

  // @ts-ignore
  allaplications: ApplicationDelivery[];
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";
  constructor(private applicationDeliveryService:ApplicationDeliveryService) { }

  ngOnInit(): void {
    this.getData(0)
  }

  getData(p:number){
    if(this.name=="") {
      this.applicationDeliveryService.getApplications().subscribe((data: ApplicationDelivery[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.applicationDeliveryService.getApplicationsByPage(p, this.size).subscribe((data: ApplicationDelivery[]) => {
        this.allaplications = data;
      })
      this.currentpage = p;
    }
    else{
      this.applicationDeliveryService.getApplicationsByTerm(this.name).subscribe((data: ApplicationDelivery[]) => {
        this.maxpages=Math.ceil(data.length/this.size);
        this.totalElements= Array.from(Array(this.maxpages).keys());
      })
      this.applicationDeliveryService.getApplicationsByTermByPage(this.name,p,this.size).subscribe((data: ApplicationDelivery[]) => {
        this.allaplications = data;
      })
      this.currentpage=p;
    }
  }

}
