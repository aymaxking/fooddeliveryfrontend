import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-place-modules',
  templateUrl: './place-modules.component.html',
  styleUrls: ['./place-modules.component.css']
})
export class PlaceModulesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    if(localStorage.getItem("currentrole")=="place"){

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
