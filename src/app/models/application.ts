import {Role} from "./role";

export class Application  {
  id:number;
  name:string;
  date:string;
  email:string;
  number:string;
  etat:string;
  img:any;

  constructor(id:number,name:string,date:string,email:string,number:string,etat:string,img:any) {
    this.id=id;
    this.name=name;
    this.date=date;
    this.email=email;
    this.number=number;
    this.etat=etat;
    this.img=img;
  }
}
