import {Component, OnInit, PipeTransform} from '@angular/core';
import {Category} from "../../../../models/category";
import {DecimalPipe} from "@angular/common";
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [DecimalPipe]
})
export class CategoryListComponent implements OnInit {
  // @ts-ignore
  allcategories: Category[];
  totalElements: any;
  size:any;
  t:any;

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getData(0,5)
  }

  getData(p:number,s:number){
    this.categoryService.getCategoriesByPage(p,s).subscribe((data: Category[]) => {
      this.allcategories = data;
      this.totalElements= Array.from(Array(Math.ceil(this.t/s)).keys());
      this.size=s;
    })
    console.log(p+"/"+s);
  }

}
