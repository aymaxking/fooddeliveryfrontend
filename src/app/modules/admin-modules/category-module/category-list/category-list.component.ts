import {Component, OnInit, PipeTransform} from '@angular/core';
import {Category} from "../../../../models/category";
import {DecimalPipe} from "@angular/common";
import {map, startWith} from 'rxjs/operators';
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [DecimalPipe]
})
export class CategoryListComponent implements OnInit {
  // @ts-ignore
  allcategories: Category[];


  constructor(private categoryService: CategoryService) {

  }


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.allcategories = data;
    })
  }

}
