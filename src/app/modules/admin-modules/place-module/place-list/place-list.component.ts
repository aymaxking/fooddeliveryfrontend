import { Component, OnInit } from '@angular/core';
import {PlaceService} from "../../../../services/AdminServices/placeService/place.service";
import {Place} from "../../../../models/place";

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  searchTerm: string | undefined;
  page = 1;
  pageSize = 4;
  // @ts-ignore
  collectionSize: number;
  // @ts-ignore
  places: Place[] ;
  // @ts-ignore
  allplaces: Place[];

  constructor(private placeService:PlaceService) { }

  ngOnInit(): void {
    this.placeService.getPlaces().subscribe((data: Place[]) => {
      this.collectionSize = data.length;
      this.places=data;
      this.allplaces=this.places;
    })
  }

  search(value: string): void {
    this.places = this.allplaces.filter((val) => val.title.toLowerCase().includes(value));
    this.collectionSize = this.places.length;
  }


}
