import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {User} from "../../models/user";
import {Category} from "../../models/category";
import {ApplicationDeliveryService} from "../../services/AdminServices/applicationDeliveryService/application-delivery.service";
import {Router} from "@angular/router";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newuser:User = Object();
  new:User = Object();




  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  login(email:string,password:string){
    this.new.username=email;
    this.new.password=password;
    this.loginService.login(this.new).subscribe(
      value => this.newuser=value
    )
    console.log(this.newuser)
    // @ts-ignore
    localStorage.setItem("currentuser",this.newuser.id.toString())
    if(this.newuser.role=="place") this.route.navigate(['/place']);
    else if(this.newuser.role=="admin")this.route.navigate(['/admin']);
  }



}
