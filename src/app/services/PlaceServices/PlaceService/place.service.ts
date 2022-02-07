import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../../../models/place";
import {menusUrl, placesUrl, submenusUrl} from "../../../global-variables";
import {Menu} from "../../../models/menu";
import {SubMenu} from "../../../models/submenu";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  // @ts-ignore
  id:number = +localStorage.getItem("currentuser");


  constructor(private http: HttpClient) { }

  getPlace(id: number): Observable<Place> {
    return this.http.get<Place>(placesUrl+`${id}`)
  }

  addCategory(menu: Menu): Observable<any> {
    return this.http.put(placesUrl+`${this.id}/addmenu`, menu)
  }

  addItem(subMenu: SubMenu,idcategory:string): Observable<any> {
    return this.http.put(placesUrl+`${this.id}/menus/${idcategory}/addsubmenu`, subMenu)
  }



  editItem(subMenu:SubMenu){
    return this.http.put(submenusUrl+`${subMenu.id}`,subMenu)
  }

  deleteItem(subMenu:SubMenu){
    return this.http.delete(submenusUrl+`${subMenu.id}`)
  }

  editCategory(menu:Menu){
    return this.http.put(menusUrl+`${menu.id}`,menu)
  }

  deleteCategory(menu:Menu){
    return this.http.delete(menusUrl+`${menu.id}`)
  }

savePlace(place: Place): Observable<any> {
    return this.http.put(placesUrl+`${place.id}`, place)
  }}
