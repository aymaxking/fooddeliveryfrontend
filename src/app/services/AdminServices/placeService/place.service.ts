import { Injectable } from '@angular/core';
import {clientsUrl, placesUrl} from 'src/app/global-variables';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../../../models/place";
import {Client} from "../../../models/client";


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(placesUrl)
  }

  getPlacesByPage(page:number,size:number): Observable<Place[]> {
    return this.http.get<Place[]>(placesUrl+"page/"+page+"/"+size)
  }

  getPlacesByTerm(term:string): Observable<Place[]> {
    return this.http.get<Place[]>(placesUrl+"byAll/"+term)
  }
  getPlacesByTermByPage(term:string,page:number,size:number): Observable<Place[]> {
    return this.http.get<Place[]>(placesUrl+"byAll/"+term+"/"+page+"/"+size)
  }
  getPlace(id: number): Observable<Place> {
    return this.http.get<Place>(placesUrl+`${id}`)
  }

  deletePlace(id: string): Observable<any> {
    return this.http.delete(placesUrl+`${id}`)
  }

  savePlace(place: Place): Observable<any> {
    return this.http.put(placesUrl+`${place.id}`, place)
  }
}
