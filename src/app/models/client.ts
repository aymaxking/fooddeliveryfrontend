import {User} from "./user";
import {Role} from "./role";

export class Client extends User{
  name:string;
  birthday:string;
  cin:string;
  home_adresse:string;

  constructor(id:number,username:string,password:string,roles:Role[],name:string,birthday:string,cin:string,home_adresse:string) {
    super(id,username,password,roles);
    this.name=name;
    this.birthday=birthday;
    this.cin=cin;
    this.home_adresse=home_adresse;
  }

}
