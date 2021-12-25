import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {Category} from "../../../../models/category";
import {Type} from "../../../../models/type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  // @ts-ignore
  altypes: Type[];
  categoryid=1;
  constructor(private categoryService: CategoryService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.categoryid=params['id']);
  }


  ngOnInit(): void {
    this.categoryService.getCategory(this.categoryid).subscribe((data: Category) => {
     this.altypes=data.types;
    })  }


}
