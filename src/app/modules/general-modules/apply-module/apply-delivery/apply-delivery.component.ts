import { Component, OnInit } from '@angular/core';
import {ApplicationPlaceService} from "../../../../services/AdminServices/applicationPlaceService/application-place.service";
import {ApplicationDeliveryService} from "../../../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {ApplicationPlace} from "../../../../models/applicationPlace";
import {ApplicationDelivery} from "../../../../models/applicationDelivery";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apply-delivery',
  templateUrl: './apply-delivery.component.html',
  styleUrls: ['./apply-delivery.component.css']
})
export class ApplyDeliveryComponent implements OnInit {
  application:ApplicationDelivery = Object();


  constructor(private applicationDeliveryService: ApplicationDeliveryService,private route:Router) { }

  ngOnInit(): void {
  }

  addApplication() {
    this.application.etat = "Processing";
    this.application.date = new Date().toLocaleDateString();
    console.log(this.application)
    this.applicationDeliveryService.addApplication(this.application).subscribe(
      value => this.route.navigate(['']) // navigate to other page

  )
  }


}
