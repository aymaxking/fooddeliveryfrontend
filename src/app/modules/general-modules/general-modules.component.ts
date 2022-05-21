import {Component, OnInit} from '@angular/core';
import {ApplicationDelivery} from "../../models/applicationDelivery";
import {
  ApplicationDeliveryService
} from "../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {Router} from "@angular/router";
import {ApplicationPlace} from "../../models/applicationPlace";
import {ApplicationPlaceService} from "../../services/AdminServices/applicationPlaceService/application-place.service";
import {User} from "../../models/user";
import {LoginService} from "../../services/login/login.service";
// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var jQuery: any;

@Component({
  selector: 'app-general-modules',
  templateUrl: './general-modules.component.html',
  styleUrls: ['./general-modules.component.css', 'css/animate.css', 'css/bootstrap-datetimepicker.min.css', 'css/flexslider.css', 'css/icomoon.css', 'css/simple-line-icons.css',
    'css/style.css', 'css/bootstrap.css']
})
export class GeneralModulesComponent implements OnInit {
  loginPopupDisplayStyle = "none";
  riderPopupDisplayStyle = "none";
  partnerPopupDisplayStyle = "none";
  application: ApplicationDelivery = Object();
  public imagePath : any ;
  imgURL: any;
  public message: any;
  // @ts-ignore
  uploadedImage:File;
  application2: ApplicationPlace = Object();
  public imagePath2 : any ;
  imgURL2: any;
  public message2: any;
  // @ts-ignore
  uploadedImage2:File;
  loginerror=false

  constructor(private applicationDeliveryService: ApplicationDeliveryService,private applicationPlaceService: ApplicationPlaceService,private route: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        let menu = document.querySelector('#menu-bar');
        let navbar = document.querySelector('.navbar');
        // @ts-ignore
        menu.onclick = () => {
          // @ts-ignore
          menu.classList.toggle('fa-times');
          // @ts-ignore
          navbar.classList.toggle('active');

        }

        window.onscroll = () => {

          // @ts-ignore
          menu.classList.remove('fa-times');
          // @ts-ignore
          navbar.classList.remove('active');

          if (window.scrollY > 60) {
            // @ts-ignore
            document.querySelector('#scroll-top').classList.add('active');
          } else {
            // @ts-ignore
            document.querySelector('#scroll-top').classList.remove('active');
          }

        }

        function loader() {
          // @ts-ignore
          document.querySelector('.loader-container').classList.add('fade-out');
        }

        function fadeOut() {
          setInterval(loader, 2000);
        }

        function openForm() {
          // @ts-ignore
          document.getElementById("myForm").style.display = "block";
        }

        function closeForm() {
          // @ts-ignore
          document.getElementById("myForm").style.display = "none";
        }

        // @ts-ignore
        window.onload = fadeOut();
      });
    })(jQuery);
  }


  openLoginPopup() {
    this.loginPopupDisplayStyle = "block";
  }

  closeLoginPopup() {
    this.loginPopupDisplayStyle = "none";
  }

  openRiderPopup() {
    this.riderPopupDisplayStyle = "block";
  }

  closeRiderPopup() {
    this.riderPopupDisplayStyle = "none";
  }

  openPartnerPopup() {
    this.partnerPopupDisplayStyle = "block";
  }

  closePartnerPopup() {
    this.partnerPopupDisplayStyle = "none";
  }

  login(email: string, password: string) {
    console.log(email+" "+password)
    this.loginService.login(new User(email, password)).subscribe(
      (value: User) => {
        // @ts-ignore
        if(value.role==undefined){
         this.loginerror=true
        }
        else{
          this.loginerror=false
          // @ts-ignore
          localStorage.setItem("currentuser", value.id.toString())
          // @ts-ignore
          localStorage.setItem("currentrole", value.role)
          if (value.role == "place") this.route.navigate(['/place']);
          else if (value.role == "admin") this.route.navigate(['/admin']);
        }

      }
    )
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
        value => {
          this.closeRiderPopup()
          Swal.fire('Congrats', 'Application sent successfully', 'success')
        }
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
  public onImageUpload2(event:any) {
    this.uploadedImage2 = event.target.files[0];
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
        value => {
          this.closePartnerPopup()
          Swal.fire('Congrats', 'Application sent successfully', 'success')
        }
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


