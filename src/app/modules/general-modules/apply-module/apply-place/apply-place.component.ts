import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {ApplicationPlaceService} from "../../../../services/AdminServices/applicationPlaceService/application-place.service";
import {Category} from "../../../../models/category";
import {ApplicationPlace} from "../../../../models/applicationPlace";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apply-place',
  templateUrl: './apply-place.component.html',
  styleUrls: ['./apply-place.component.css']
})
export class ApplyPlaceComponent implements OnInit {

  application:ApplicationPlace = Object();

  constructor(private applicationPlaceService: ApplicationPlaceService,private route:Router) { }

  ngOnInit(): void {
  }


  addApplication() {
    this.application.etat = "Processing";
    this.application.date = new Date().toLocaleDateString();
    this.applicationPlaceService.addApplication(this.application).subscribe(
      value => this.route.navigate([''])
    )
    this.applicationPlaceService.sendemail(this.application,"received").subscribe(
      value => console.log()
    )
  }

}
