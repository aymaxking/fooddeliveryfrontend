import {Component, OnInit} from '@angular/core';
import {ApplicationDelivery} from "../../models/applicationDelivery";
import {ApplicationDeliveryService} from "../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {Router} from "@angular/router";
import {ApplicationPlace} from "../../models/applicationPlace";
import {ApplicationPlaceService} from "../../services/AdminServices/applicationPlaceService/application-place.service";
import {User} from "../../models/user";
import {LoginService} from "../../services/login/login.service";
declare  var jQuery:  any;

@Component({
  selector: 'app-general-modules',
  templateUrl: './general-modules.component.html',
  styleUrls: ['./general-modules.component.css','css/animate.css','css/bootstrap-datetimepicker.min.css','css/flexslider.css','css/icomoon.css','css/simple-line-icons.css',
    'css/style.css','css/bootstrap.css']
})
export class GeneralModulesComponent implements OnInit {
  loginPopupDisplayStyle = "none";

  constructor(private route: Router,private loginService:LoginService) {
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        let menu = document.querySelector('#menu-bar');
        let navbar = document.querySelector('.navbar');
        // @ts-ignore
        menu.onclick = () =>{
          // @ts-ignore
          menu.classList.toggle('fa-times');
          // @ts-ignore
          navbar.classList.toggle('active');

        }

        window.onscroll = () =>{

          // @ts-ignore
          menu.classList.remove('fa-times');
          // @ts-ignore
          navbar.classList.remove('active');

          if(window.scrollY > 60){
            // @ts-ignore
            document.querySelector('#scroll-top').classList.add('active');
          }else{
            // @ts-ignore
            document.querySelector('#scroll-top').classList.remove('active');
          }

        }

        function loader(){
          // @ts-ignore
          document.querySelector('.loader-container').classList.add('fade-out');
        }

        function fadeOut(){
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
        window.onload = fadeOut();      });
    })(jQuery);
  }





  openLoginPopup() {
    this.loginPopupDisplayStyle = "block";
  }

  closeLoginPopup() {
    this.loginPopupDisplayStyle = "none";
  }

  login(email:string,password:string){
    this.loginService.login(new User(email, password)).subscribe(
        (value: User) => {
          console.log(value);
        // @ts-ignore
        localStorage.setItem("currentuser",value.id.toString())
        if(value.role=="place") this.route.navigate(['/place']);
        else if(value.role=="admin")this.route.navigate(['/admin']);
      }
    )
  }

}
