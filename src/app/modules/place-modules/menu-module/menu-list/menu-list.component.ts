import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/category";
import {CategoryService} from "../../../../services/AdminServices/categoryService/category.service";
import {PlaceService} from "../../../../services/PlaceServices/PlaceService/place.service";
import {Menu} from "../../../../models/menu";
import {SubMenu} from "../../../../models/submenu";
import {Location} from "../../../../models/location";
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
  public message: any;
  // @ts-ignore
  id:number = +localStorage.getItem("currentuser");


  constructor(private placeService: PlaceService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getPlace()
  }

  getPlace(){
    this.placeService.getPlace(this.id).subscribe((data: Place) => {
      this.place = data;
    })
  }


  addCategory(title: string) {
    this.placeService.addCategory(new Menu(title)).subscribe(
      value => this.getPlace()
    )
  }

  addItem(title: string, price:number, img:string) {
    this.placeService.addItem(new SubMenu(title,price,img),this.newitemcategoryid).subscribe(
      value => this.getPlace()
    )
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
    this.placeService.editItem(editeditem).subscribe(
      value => this.getPlace()
    )
  }


  deleteItem(deletedItem:SubMenu) {
    this.placeService.deleteItem(deletedItem).subscribe(
      value => this.getPlace()
    )
  }
  addLocation(location: string) {
    this.placeService.addLocation(new Location(location)).subscribe(
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
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  clearCategoryPopup(){

  }

  getImage(image:any) {
    alert(JSON.stringify(image));
    let objectURL = URL.createObjectURL(image);
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
