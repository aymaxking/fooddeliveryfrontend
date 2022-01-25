import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {loginUrl, placesUrl} from "../../global-variables";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user:User): Observable<any> {
    return this.http.put(loginUrl,user)
  }
}
