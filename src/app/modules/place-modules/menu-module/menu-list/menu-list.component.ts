import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/category";
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {PlaceService} from "../../../../services/PlaceServices/PlaceService/place.service";
import {Menu} from "../../../../models/menu";
import {SubMenu} from "../../../../models/submenu";
import {Location} from "../../../../models/location";
import {Place} from "../../../../models/place";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
 // @ts-ignore
  place :Place;
  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.getPlace(8)
  }

  getPlace(id:number){
    this.placeService.getPlace(id).subscribe((data: Place) => {
      this.place = data;
    })
  }


  addCategory(title: string) {
    this.placeService.addCategory(new Menu(title)).subscribe(
      value => console.log(value)
    )
  }

  addItem(title: string,price:number,img:string) {
    this.placeService.addItem(new SubMenu(title,price,img)).subscribe(
      value => console.log(value)
    )
  }

  addLocation(location: string) {
    this.placeService.addLocation(new Location(location)).subscribe(
      value => console.log(value)
    )
  }
}
