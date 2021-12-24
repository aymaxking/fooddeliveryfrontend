import {User} from "./user";
import {Role} from "./role";

export class Delivery extends User{
  name:string;
  birthday:string;
  CIN:string;
  adresse:string;
  start_date:string;

  constructor(id:number,username:string,password:string,roles:Role[],name:string,birthday:string,CIN:string,adresse:string,start_date:string) {
    super(id,username,password,roles);
    this.name=name;
    this.birthday=birthday;
    this.CIN=CIN;
    this.adresse=adresse;
    this.start_date=start_date;
  }

}
