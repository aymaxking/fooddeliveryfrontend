import {Component, OnInit} from '@angular/core';
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
  application: ApplicationDelivery = Object();
  public imagePath : any ;
  imgURL: any;
  public message: any;
  // @ts-ignore
  uploadedImage:File;

  constructor(private applicationDeliveryService: ApplicationDeliveryService, private route: Router) {
  }

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

}
