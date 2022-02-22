import {Component, OnInit} from '@angular/core';
import {ApplicationDelivery} from "../../models/applicationDelivery";
import {ApplicationDeliveryService} from "../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {Router} from "@angular/router";
import {ApplicationPlace} from "../../models/applicationPlace";
import {ApplicationPlaceService} from "../../services/AdminServices/applicationPlaceService/application-place.service";

@Component({
  selector: 'app-general-modules',
  templateUrl: './general-modules.component.html',
  styleUrls: ['./general-modules.component.css','css/animate.css','css/bootstrap-datetimepicker.min.css','css/flexslider.css','css/icomoon.css','css/simple-line-icons.css',
    'css/style.css','css/bootstrap.css']
})
export class GeneralModulesComponent implements OnInit {
  application: ApplicationDelivery = Object();
  public imagePath : any ;
  imgURL: any;
  public message: any;
  // @ts-ignore
  uploadedImage:File;

  application2:ApplicationPlace = Object();
  public imagePath2 : any ;
  imgURL2: any;
  public message2: any;
  // @ts-ignore
  uploadedImage2:File;
  constructor(private applicationDeliveryService: ApplicationDeliveryService,private applicationPlaceService:ApplicationPlaceService ,private route: Router) {
  }

  ngOnInit(): void {
  }
  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }

  public onImageUpload2(event:any) {
    this.uploadedImage2 = event.target.files[0];
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
      this.applicationDeliveryService.addApplication(this.application).subscribe(
        value => this.route.navigate([''])
      )
    }

    this.applicationDeliveryService.sendemail(this.application, "received").subscribe(
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


  addApplication2() {
    this.application2.etat = "Processing";
    this.application2.date = new Date().toLocaleDateString();
    // @ts-ignore
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage2);
    // @ts-ignore
    reader.onload = (e) => {
      // @ts-ignore
      this.application2.img=reader.result.toString().replace(/^data:image\/[a-z]+;base64,/,'');
      this.applicationPlaceService.addApplication(this.application2).subscribe(
        value => this.route.navigate([''])
      )
    }
    this.applicationPlaceService.sendemail(this.application2,"received").subscribe(
      value => console.log()
    )
  }

  preview2(files:any) {

    var mimeType = this.uploadedImage2 .type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Not Image")
      return;
    }
    // @ts-ignore
    var reader = new FileReader();
    this.imagePath2 = files;
    reader.readAsDataURL(files[0]);
    // @ts-ignore
    reader.onload = (_event) => {
      this.imgURL2 = reader.result;
    }
  }


}
