import {SubMenu} from "./submenu";

export class Menu{
  id:number;
  title:string;
  subMenus:SubMenu[];

  constructor(id:number,title:string,subMenus:SubMenu[]) {
    this.id=id;
    this.title=title;
    this.subMenus=subMenus;
  }
}
