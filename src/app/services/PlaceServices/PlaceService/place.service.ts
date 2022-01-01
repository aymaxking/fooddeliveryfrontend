import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../../../models/place";
import {placesUrl} from "../../../global-variables";
import {Menu} from "../../../models/menu";
import {SubMenu} from "../../../models/submenu";
import {Location} from "../../../models/location";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlace(id: number): Observable<Place> {
    return this.http.get<Place>(placesUrl+`${id}`)
  }

  addCategory(menu: Menu): Observable<any> {
    return this.http.put(placesUrl+`8/addmenu`, menu)
  }

  addItem(subMenu: SubMenu): Observable<any> {
    return this.http.put(placesUrl+`8/addsubmenu`, subMenu)
  }

  addLocation(location: Location): Observable<any> {
    return this.http.put(placesUrl+`8/addlocation`, location)
  }


savePlace(place: Place): Observable<any> {
    return this.http.put(placesUrl+`${place.id}`, place)
  }}
