import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../../../../services/AdminServices/deliveryService/delivery.service";
import {Delivery} from "../../../../models/delivery";

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  // @ts-ignore
  alldeliveries: Delivery[];
  totalElements: any;
  size = 8;
  t: any;
  currentpage = 1
  maxpages = 0;
  title = "";

  deliveryEditPopupDisplayStyle = "none";
  editedDelivery: Delivery = Object();


  deliveryAddPopupDisplayStyle = "none";

  deliveryDeletePopupDisplayStyle = "none";
  deletedDelivery: Delivery = Object();

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.getData(0)
  }


  getData(p: number) {
    if (this.title == "") {
      this.deliveryService.getDeliveries().subscribe((data: Delivery[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.deliveryService.getDeliveriesByPage(p, this.size).subscribe((data: Delivery[]) => {
        this.alldeliveries = data;
      })
      this.currentpage = p;
    } else {
      this.deliveryService.getDeliveriesByTerm(this.title).subscribe((data: Delivery[]) => {
        this.maxpages = Math.ceil(data.length / this.size);
        this.totalElements = Array.from(Array(this.maxpages).keys());
      })
      this.deliveryService.getDeliveriesByTermByPage(this.title, p, this.size).subscribe((data: Delivery[]) => {
        this.alldeliveries = data;
      })
      this.currentpage = p;
    }
  }


  openEditItemPopup(edited: Delivery) {
    this.deliveryEditPopupDisplayStyle = "block";
    this.editedDelivery = edited;
  }

  closeEditItemPopup() {
    this.deliveryEditPopupDisplayStyle = "none";
  }

  addDelivery(delivery: Delivery) {
    this.deliveryService.addDelivery(delivery).subscribe(
      value => console.log(value)
    )
  }


  saveDelivery(delivery: Delivery) {
    this.deliveryService.saveDelivery(delivery).subscribe(
      value => console.log(value)
    )
  }

  deleteDelivery(delivery : Delivery) {
    // @ts-ignore
    this.deliveryService.deleteDelivery(delivery.id.toString()).subscribe(
        (value: any) => console.log(value)
    )
  }



  openAddItemPopup() {
    this.deliveryAddPopupDisplayStyle = "block";
  }

  closeAddItemPopup() {
    this.deliveryAddPopupDisplayStyle = "none";
  }

  openDeleteItemPopup(deleted: Delivery) {
    this.deliveryDeletePopupDisplayStyle = "block";
    this.deletedDelivery=deleted
  }

  closeDeleteItemPopup() {
    this.deliveryDeletePopupDisplayStyle = "none";
  }

  getImage(image:any) {
    return  'data:image/jpeg;base64,' + image;
  }
}
