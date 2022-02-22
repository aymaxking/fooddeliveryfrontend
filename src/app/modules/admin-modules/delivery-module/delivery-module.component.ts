import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-module',
  templateUrl: './delivery-module.component.html',
  styleUrls: ['./delivery-module.component.css']
})
export class DeliveryModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    $("#menu-toggle2").click(function(e) {
      e.preventDefault();
      // @ts-ignore
      $("#wrapper").toggleClass("toggled");
    });
  }

}
