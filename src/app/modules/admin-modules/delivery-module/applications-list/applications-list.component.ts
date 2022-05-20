import { Component, OnInit } from '@angular/core';
import {Client} from "../../../../models/client";
import {ClientService} from "../../../../services/AdminServices/clientService/client.service";
import {ApplicationDelivery} from "../../../../models/applicationDelivery";
import {ApplicationDeliveryService} from "../../../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {Category} from "../../../../models/category";

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {

  // @ts-ignore
  allaplications: ApplicationDelivery[];
  editedapplication:ApplicationDelivery=Object();
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";
  applicationAcceptPopupDisplayStyle = "none";
  applicationRefusePopupDisplayStyle = "none";
  applicationFinishPopupDisplayStyle = "none";

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

  openAcceptItemPopup(edited: ApplicationDelivery) {
    this.applicationAcceptPopupDisplayStyle = "block";
    this.editedapplication = edited;
  }

  closeAcceptItemPopup() {
    this.applicationAcceptPopupDisplayStyle = "none";
  }

  openRefuseItemPopup(edited: ApplicationDelivery) {
    this.applicationRefusePopupDisplayStyle = "block";
    this.editedapplication = edited;
  }

  closeRefuseItemPopup() {
    this.applicationRefusePopupDisplayStyle = "none";
  }

  openFinishItemPopup(edited: ApplicationDelivery) {
    this.applicationFinishPopupDisplayStyle = "block";
    this.editedapplication = edited;
  }

  openContract(edited: ApplicationDelivery) {
    this.editedapplication = edited;
    this.applicationDeliveryService.showcontract(this.editedapplication);
  }

  closeFinishItemPopup() {
    this.applicationFinishPopupDisplayStyle = "none";
  }

  valide() {
    this.editedapplication.etat = "Accepted";
    this.applicationDeliveryService.sendemail(this.editedapplication,"accepted").subscribe(
      value => console.log()
    )
    this.applicationDeliveryService.saveApplication(this.editedapplication).subscribe(
      value => this.getData(0)
    )
  }

  finish() {
    this.editedapplication.etat = "Validated";
    this.applicationDeliveryService.saveApplication(this.editedapplication).subscribe(
      value => this.getData(0)
    )
    this.applicationDeliveryService.finishApplication(this.editedapplication).subscribe(
      value => console.log(value)
    )
  }

  refuse() {
    this.editedapplication.etat = "Refused";
    this.applicationDeliveryService.sendemail(this.editedapplication,"refused").subscribe(
      value => console.log()
    )
    this.applicationDeliveryService.saveApplication(this.editedapplication).subscribe(
      value => this.getData(0)
    )
  }
  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }

}
