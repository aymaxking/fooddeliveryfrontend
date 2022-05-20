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
  editedapplication:ApplicationPlace=Object();
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";
  applicationAcceptPopupDisplayStyle = "none";
  applicationRefusePopupDisplayStyle = "none";
  applicationFinishPopupDisplayStyle = "none";


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


  openAcceptItemPopup(edited: ApplicationPlace) {
    this.applicationAcceptPopupDisplayStyle = "block";
    this.editedapplication = edited;
  }

  closeAcceptItemPopup() {
    this.applicationAcceptPopupDisplayStyle = "none";
  }

  openRefuseItemPopup(edited: ApplicationPlace) {
    this.applicationRefusePopupDisplayStyle = "block";
    this.editedapplication = edited;
  }

  closeRefuseItemPopup() {
    this.applicationRefusePopupDisplayStyle = "none";
  }
  openFinishItemPopup(edited: ApplicationPlace) {
    this.applicationFinishPopupDisplayStyle = "block";
    this.editedapplication = edited;
  }

  closeFinishItemPopup() {
    this.applicationFinishPopupDisplayStyle = "none";
  }
  openContract(edited: ApplicationPlace) {
    this.editedapplication = edited;
    this.applicationPlaceService.showcontract(this.editedapplication);
  }
  valide() {
    this.editedapplication.etat = "Accepted";
    this.applicationPlaceService.sendemail(this.editedapplication,"accepted").subscribe(
      value => console.log()
    )
    this.applicationPlaceService.saveApplication(this.editedapplication).subscribe(
      value => this.getData(0)
    )
  }

  finish() {
    this.editedapplication.etat = "Validated";
    this.applicationPlaceService.saveApplication(this.editedapplication).subscribe(
      value => this.getData(0)
    )
    this.applicationPlaceService.finishApplication(this.editedapplication).subscribe(
      value => console.log()
    )
  }

  refuse() {
    this.editedapplication.etat = "Refused";
    this.applicationPlaceService.sendemail(this.editedapplication,"refused").subscribe(
      value => console.log()
    )
    this.applicationPlaceService.saveApplication(this.editedapplication).subscribe(
      value => this.getData(0)
    )
  }
  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }
}
