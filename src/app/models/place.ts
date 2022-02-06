import {User} from "./user";
import {Location} from "./location";
import {Menu} from "./menu";
import {Role} from "./role";

export class Place extends User{
  title:string;
  description:string;
  locations:Location[];
  menus:Menu[];


  constructor(username:string,password:string,id:number,role:string,img:any,title:string,description:string,locations:Location[],menus:Menu[]) {
    super(username,password,img,id,role);
    this.title=title;
    this.description=description;
    this.locations=locations;
    this.menus=menus;

  }

}
