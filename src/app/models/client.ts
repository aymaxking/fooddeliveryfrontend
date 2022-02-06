import {User} from "./user";
import {Role} from "./role";

export class Client extends User{
  name:string;
  birthday:string;
  cin:string;
  home_adresse:string;

  constructor(username:string,password:string,id:number,role:string,img:any,name:string,birthday:string,cin:string,home_adresse:string) {
    super(username,password,img,id,role);
    this.name=name;
    this.birthday=birthday;
    this.cin=cin;
    this.home_adresse=home_adresse;
  }

}
