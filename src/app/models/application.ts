import {Role} from "./role";

export class Application  {
  id:number;
  name:string;
  date:string;
  email:string;
  number:string;
  constructor(id:number,name:string,date:string,email:string,number:string) {
    this.id=id;
    this.name=name;
    this.date=date;
    this.email=email;
    this.number=number;
  }
}
