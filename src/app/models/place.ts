import {User} from "./user";
import {Location} from "./location";
import {Menu} from "./menu";
import {Role} from "./role";

export class Place extends User{
  title:string;
  img:string;
  description:string;
  locations:Location[];
  menus:Menu[];


  constructor(id:number,username:string,password:string,roles:Role[],title:string,img:string,description:string,locations:Location[],menus:Menu[]) {
    super(id,username,password,roles);
    this.title=title;
    this.img=img;
    this.description=description;
    this.locations=locations;
    this.menus=menus;

  }

}
