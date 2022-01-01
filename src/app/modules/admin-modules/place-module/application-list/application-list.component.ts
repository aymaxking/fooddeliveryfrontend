import { Component, OnInit } from '@angular/core';
import {ApplicationDelivery} from "../../../../models/applicationDelivery";
import {ApplicationDeliveryService} from "../../../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {ApplicationPlace} from "../../../../models/applicationPlace";
import {ApplicationPlaceService} from "../../../../services/AdminServices/applicationPlaceService/application-place.service";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

// @ts-ignore
  allaplications: ApplicationPlace[];
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";
  constructor(private applicationPlaceService:ApplicationPlaceService) { }

  ngOnInit(): void {
    this.getData(0)
  }

  getData(p:number){
    if(this.name=="") {
      this.applicationPlaceService.getApplications().subscribe((data: ApplicationPlace[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.applicationPlaceService.getApplicationsByPage(p, this.size).subscribe((data: ApplicationPlace[]) => {
        this.allaplications = data;
      })
      this.currentpage = p;
    }
    else{
      this.applicationPlaceService.getApplicationsByTerm(this.name).subscribe((data: ApplicationPlace[]) => {
        this.maxpages=Math.ceil(data.length/this.size);
        this.totalElements= Array.from(Array(this.maxpages).keys());
      })
      this.applicationPlaceService.getApplicationsByTermByPage(this.name,p,this.size).subscribe((data: ApplicationPlace[]) => {
        this.allaplications = data;
      })
      this.currentpage=p;
    }
  }

}
