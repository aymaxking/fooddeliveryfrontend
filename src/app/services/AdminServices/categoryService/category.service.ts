import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../../models/category";
import {categoriesUrl, typesUrl} from "../../../global-variables";
import {Type} from "../../../models/type";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(categoriesUrl)
  }

  getCategoriesByTitle(title: string): Observable<Category[]> {
    return this.http.get<Category[]>(categoriesUrl + "byTitle/" + title)
  }

  getCategoriesByTitleByPage(title: string, page: number, size: number): Observable<Category[]> {
    return this.http.get<Category[]>(categoriesUrl + "byTitle/" + title + "/" + page + "/" + size)
  }

  getCategoriesByPage(page: number, size: number): Observable<Category[]> {
    return this.http.get<Category[]>(categoriesUrl + "page/" + page + "/" + size)
  }


  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(categoriesUrl + `${id}`)
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(categoriesUrl + `${id}`)
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post<Category>(categoriesUrl, category)
  }

  addType(type: Type, id: String): Observable<any> {
    return this.http.put<Type>(categoriesUrl  + id + "/addtype", type)
  }

  saveType(type: Type): Observable<any> {
    return this.http.put(typesUrl + `${type.id}`, type)
  }

  deleteType(id: string): Observable<any> {
    return this.http.delete(typesUrl + `${id}`)
  }

  saveCategory(category: Category): Observable<any> {
    return this.http.put(categoriesUrl + `${category.id}`, category)
  }
}
