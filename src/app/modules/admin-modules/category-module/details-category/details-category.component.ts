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
  alltypes: Type[];
  categoryid=1;

  typeEditPopupDisplayStyle = "none";
  editedType: Type = Object();


  typeAddPopupDisplayStyle = "none";

  typeDeletePopupDisplayStyle = "none";
  deletedType: Type = Object();


  constructor(private categoryService: CategoryService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.categoryid=params['id']);
  }


  ngOnInit(): void {
    this.getData()
   }

  getData(){
      this.categoryService.getCategory(this.categoryid).subscribe((data: Category) => {
        // @ts-ignore
        this.alltypes=data.types;
      })
    }


  openEditItemPopup(edited: Type) {
    this.typeEditPopupDisplayStyle = "block";
    this.editedType = edited;
  }

  closeEditItemPopup() {
    this.typeEditPopupDisplayStyle = "none";
  }

  addType(title: string) {
    this.categoryService.addType(new Type(title),this.categoryid.toString()).subscribe(
      value => this.getData()
    )
  }


  saveType(type: Type) {
    this.categoryService.saveType(type).subscribe(
      value => this.getData()
    )
  }

  deleteType(type : Type) {
    // @ts-ignore
    this.categoryService.deleteType(type.id.toString()).subscribe(
      value => this.getData()
    )
  }



  openAddItemPopup() {
    this.typeAddPopupDisplayStyle = "block";
  }

  closeAddItemPopup() {
    this.typeAddPopupDisplayStyle = "none";
  }

  openDeleteItemPopup(deleted: Category) {
    this.typeDeletePopupDisplayStyle = "block";
    this.deletedType=deleted
  }

  closeDeleteItemPopup() {
    this.typeDeletePopupDisplayStyle = "none";
  }


}
