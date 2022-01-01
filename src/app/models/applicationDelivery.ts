import {Application} from "./application";

export class ApplicationDelivery extends Application {

  birthday: string;
  city: string;
  vehiculetpye: string;

  constructor(id: number, name: string, date: string, email: string, number: string, birthday: string, city: string, vehiculetpye: string) {
    super(id, name, date, email, number);
    this.birthday = birthday;
    this.city = city;
    this.vehiculetpye = vehiculetpye;
  }
}
