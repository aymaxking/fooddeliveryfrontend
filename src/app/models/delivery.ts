import {User} from "./user";
import {Role} from "./role";

export class Delivery extends User{
  name:string;
  birthday:string;
  cin:string;
  adresse:string;
  start_date:string;

  constructor(username:string,password:string,id:number,role:string,img:any,name:string,birthday:string,cin:string,adresse:string,start_date:string) {
    super(username,password,img,id,role);
    this.name=name;
    this.birthday=birthday;
    this.cin=cin;
    this.adresse=adresse;
    this.start_date=start_date;
  }

}
