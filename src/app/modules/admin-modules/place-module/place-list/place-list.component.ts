import { Component, OnInit } from '@angular/core';
import {PlaceService} from "../../../../services/AdminServices/placeService/place.service";
import {Place} from "../../../../models/place";
import {Client} from "../../../../models/client";

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  // @ts-ignore
  allplaces: Place[];
  totalElements: any;
  size=8;
  t:any;
  currentpage=1
  maxpages=0;
  name="";

  constructor(private placeService:PlaceService) { }

  ngOnInit(): void {
    this.getData(0)
  }


  getData(p:number){
    if(this.name=="") {
      this.placeService.getPlaces().subscribe((data: Place[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.placeService.getPlacesByPage(p, this.size).subscribe((data: Place[]) => {
        this.allplaces = data;
      })
      this.currentpage = p;
    }
    else{
      this.placeService.getPlacesByTerm(this.name).subscribe((data: Place[]) => {
        this.maxpages=Math.ceil(data.length/this.size);
        this.totalElements= Array.from(Array(this.maxpages).keys());
      })
      this.placeService.getPlacesByTermByPage(this.name,p,this.size).subscribe((data: Place[]) => {
        this.allplaces = data;
      })
      this.currentpage=p;
    }
  }
  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }

}
