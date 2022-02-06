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
  public imagePath : any ;
  imgURL: any;
  public message: any;
  // @ts-ignore
  uploadedImage:File;
  constructor(private applicationPlaceService: ApplicationPlaceService,private route:Router) { }

  ngOnInit(): void {
  }
  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }


  addApplication() {
    this.application.etat = "Processing";
    this.application.date = new Date().toLocaleDateString();
    // @ts-ignore
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    // @ts-ignore
    reader.onload = (e) => {
      // @ts-ignore
      this.application.img=reader.result.toString().replace(/^data:image\/[a-z]+;base64,/,'');
      console.log(this.application)
      this.applicationPlaceService.addApplication(this.application).subscribe(
        value => this.route.navigate([''])
      )
    }
    this.applicationPlaceService.sendemail(this.application,"received").subscribe(
      value => console.log()
    )
  }

  preview(files:any) {

    var mimeType = this.uploadedImage .type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Not Image")
      return;
    }
    // @ts-ignore
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // @ts-ignore
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }
}
