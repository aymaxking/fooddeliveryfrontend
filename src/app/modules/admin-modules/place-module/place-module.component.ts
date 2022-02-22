import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-module',
  templateUrl: './place-module.component.html',
  styleUrls: ['./place-module.component.css']
})
export class PlaceModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      // @ts-ignore
      $("#wrapper").toggleClass("toggled");
    });
  }

}
