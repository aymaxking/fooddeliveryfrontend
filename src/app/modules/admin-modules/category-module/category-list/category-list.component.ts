import {Component, OnInit, PipeTransform} from '@angular/core';
import {Category} from "../../../../models/category";
import {DecimalPipe} from "@angular/common";
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {NgForm} from "@angular/forms";
import {Type} from "../../../../models/type";

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
  size = 8;
  t: any;
  currentpage = 1
  maxpages = 0;
  title = "";

  categoryEditPopupDisplayStyle = "none";
  editedCategory: Category = Object();


  categoryAddPopupDisplayStyle = "none";

  categoryDeletePopupDisplayStyle = "none";
  deletedCategory: Category = Object();


  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getData(0)
  }

  getData(p: number) {
    if (this.title == "") {
      this.categoryService.getCategories().subscribe((data: Category[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.categoryService.getCategoriesByPage(p, this.size).subscribe((data: Category[]) => {
        this.allcategories = data;
      })
      this.currentpage = p;
    } else {
      this.categoryService.getCategoriesByTitle(this.title).subscribe((data: Category[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.categoryService.getCategoriesByTitleByPage(this.title, p, this.size).subscribe((data: Category[]) => {
        this.allcategories = data;
      })
      this.currentpage = p;
    }
  }


  openEditItemPopup(edited: Category) {
    this.categoryEditPopupDisplayStyle = "block";
    this.editedCategory = edited;
  }

  closeEditItemPopup() {
    this.categoryEditPopupDisplayStyle = "none";
  }

  addCategory(title: string) {
      this.categoryService.addCategory(new Category(title)).subscribe(
        value => this.getData(0)
      )
  }


  saveCategory(category: Category) {
    this.categoryService.saveCategory(category).subscribe(
      value => this.getData(0)
    )
  }

  deleteCategory(cat : Category) {
      // @ts-ignore
      this.categoryService.deleteCategory(cat.id.toString()).subscribe(
        value => this.getData(0)
      )
  }



  openAddItemPopup() {
    this.categoryAddPopupDisplayStyle = "block";
  }

  closeAddItemPopup() {
    this.categoryAddPopupDisplayStyle = "none";
  }

  openDeleteItemPopup(deleted: Category) {
    this.categoryDeletePopupDisplayStyle = "block";
    this.deletedCategory=deleted
  }

  closeDeleteItemPopup() {
    this.categoryDeletePopupDisplayStyle = "none";
  }
}
