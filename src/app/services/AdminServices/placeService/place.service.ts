import { Injectable } from '@angular/core';
import {placesUrl} from 'src/app/global-variables';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../../../models/place";


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(placesUrl)
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
