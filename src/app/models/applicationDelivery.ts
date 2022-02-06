import {Application} from "./application";

export class ApplicationDelivery extends Application {

  birthday: string;
  city: string;
  vehiculeType: string;
  cin: string;
  adresse:string;

  constructor(id: number, name: string, date: string, email: string, number: string, birthday: string, city: string, vehiculeType: string,etat:string,CIN:string,adresse:string,img:any) {
    super(id, name, date, email, number, etat,img);
    this.birthday = birthday;
    this.city = city;
    this.vehiculeType = vehiculeType;
    this.cin=CIN;
    this.adresse=adresse;
  }
}
