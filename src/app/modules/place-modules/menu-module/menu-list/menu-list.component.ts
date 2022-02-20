import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/category";
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {PlaceService} from "../../../../services/PlaceServices/PlaceService/place.service";
import {Menu} from "../../../../models/menu";
import {SubMenu} from "../../../../models/submenu";
import {Place} from "../../../../models/place";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  place :Place = Object();
  newCategory :  Menu = Object();
  categoryaPopupDisplayStyle = "none";
  itemPopupDisplayStyle = "none";
  itemEditPopupDisplayStyle = "none";
  itemDeletePopupDisplayStyle = "none";
  itemEditCategoryPopupDisplayStyle = "none";
  itemDeleteCategoryPopupDisplayStyle = "none";
  editedSubMenu:SubMenu= Object();
  deletedSubMenu:SubMenu= Object();
  // @ts-ignore
  newitemcategoryid:string;
  editedCategory:Menu = Object();
  deletedCategory:Menu = Object();
  public imagePath : any ;
  imgURL: any;
  imgURLEdit:any;
  public message: any;
  // @ts-ignore
  uploadedImage:File;
  // @ts-ignore
  id:number = +localStorage.getItem("currentuser");




  constructor(private placeService: PlaceService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getPlace()
  }

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }

  getPlace(){this.placeService.getPlace(this.id).subscribe((data: Place) => {
      this.place = data;
      console.log(this.place)
    })
  }


  addCategory(title: string) {
    this.placeService.addCategory(new Menu(title)).subscribe(
      value => this.getPlace()
    )
  }

  addItem(title: string, price:number) {
    // @ts-ignore
    var reader = new FileReader();
     var text : String;
    reader.readAsDataURL(this.uploadedImage);
    // @ts-ignore
    reader.onload = (e) => {
      // @ts-ignore
      this.placeService.addItem(new SubMenu(title,price,reader.result.toString().replace(/^data:image\/[a-z]+;base64,/,'')),this.newitemcategoryid).subscribe(value => this.getPlace())
    }
  }

  editCategory() {
    console.log(this.editedCategory)
    this.placeService.editCategory(this.editedCategory).subscribe(
      value => this.getPlace()
    )
  }


  deleteCategory(deleted:Menu) {
    this.placeService.deleteCategory(deleted).subscribe(
      value => this.getPlace()
    )
  }

  editItem(editeditem:SubMenu) {
    // @ts-ignore
    var reader = new FileReader();
    var text : String;
    reader.readAsDataURL(this.uploadedImage);
    // @ts-ignore
    reader.onload = (e) => {
      // @ts-ignore
      editeditem.img=reader.result.toString().replace(/^data:image\/[a-z]+;base64,/,'');
      this.placeService.editItem(editeditem).subscribe(
        value => this.getPlace()
      )
    }

  }


  deleteItem(deletedItem:SubMenu) {
    this.placeService.deleteItem(deletedItem).subscribe(
      value => this.getPlace()
    )
  }


  openDeleteCategoryPopup(deleted:Menu){
    this.itemDeleteCategoryPopupDisplayStyle = "block";
    this.deletedCategory=deleted;
  }
  closeDeleteCategoryPopup() {
    this.itemDeleteCategoryPopupDisplayStyle = "none";
  }
  openEditCategoryPopup(edited:Menu){
    this.itemEditCategoryPopupDisplayStyle = "block";
    this.editedCategory=edited;
  }
  closeEditCategoryPopup() {
    this.itemEditCategoryPopupDisplayStyle = "none";
  }


  openDeleteItemPopup(deleted:SubMenu){
    this.itemDeletePopupDisplayStyle = "block";
    this.deletedSubMenu=deleted;
  }
  closeDeleteItemPopup() {
    this.itemDeletePopupDisplayStyle = "none";
  }
  openEditItemPopup(edited:SubMenu){
    this.itemEditPopupDisplayStyle = "block";
    this.editedSubMenu=edited;
    this.imgURLEdit=this.getImage(this.editedSubMenu.img)
  }
  closeEditItemPopup() {
    this.itemEditPopupDisplayStyle = "none";
  }
  openCategoryPopup() {
    this.categoryaPopupDisplayStyle = "block";
  }
  closeCategoryPopup() {
    this.categoryaPopupDisplayStyle = "none";
  }
  openItemPopup() {
    this.itemPopupDisplayStyle = "block";
  }
  closeItemPopup() {
    this.itemPopupDisplayStyle = "none";
  }

  preview(files:any) {

    var mimeType = this.uploadedImage .type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Not Image")
      return;
    }
    // @ts-ignore
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // @ts-ignore
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  previewedited(files:any) {

    var mimeType = this.uploadedImage .type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Not Image")
      return;
    }
    // @ts-ignore
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // @ts-ignore
    reader.onload = (_event) => {
      this.imgURLEdit = reader.result;
    }
  }

  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }
}
