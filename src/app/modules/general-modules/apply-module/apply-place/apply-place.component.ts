import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {ApplicationPlaceService} from "../../../../services/AdminServices/applicationPlaceService/application-place.service";
import {Category} from "../../../../models/category";
import {ApplicationPlace} from "../../../../models/applicationPlace";

@Component({
  selector: 'app-apply-place',
  templateUrl: './apply-place.component.html',
  styleUrls: ['./apply-place.component.css']
})
export class ApplyPlaceComponent implements OnInit {

  application:ApplicationPlace = Object();

  constructor(private applicationPlaceService: ApplicationPlaceService) { }

  ngOnInit(): void {
  }


  addApplication() {
    this.application.etat = "Processing";
    this.application.date = new Date().toLocaleDateString();
    this.applicationPlaceService.addApplication(this.application).subscribe(
      value => console.log(value)
    )
  }

}
