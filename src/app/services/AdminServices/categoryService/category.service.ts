import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../../models/category";
import {categoriesUrl} from "../../../global-variables";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(categoriesUrl)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(categoriesUrl + `${id}`)
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(categoriesUrl+`${id}`)
  }

  saveCategory(category: Category): Observable<any> {
    return this.http.put(categoriesUrl+`${category.id}`, category)
  }
}
