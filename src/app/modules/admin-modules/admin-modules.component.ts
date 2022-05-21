import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-admin-modules',
  templateUrl: './admin-modules.component.html',
  styleUrls: ['./admin-modules.component.css',"./sb-admin-2.css"]
})
export class AdminModulesComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    if(localStorage.getItem("currentrole")=="admin"){

    }
    else{
      this.route.navigate(['']);
    }
  }
  logout(){
    // @ts-ignore
    localStorage.clear()
    this.route.navigate(['']);
  }
}
