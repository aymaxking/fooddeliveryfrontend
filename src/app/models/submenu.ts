export class SubMenu{
  id?:number;
  title:string;
  price:number;
  img:any;



  constructor(title:string,price:number,img:any,id?:number) {
    this.id=id;
    this.title=title;
    this.price=price;
    this.img=img;
  }
}
