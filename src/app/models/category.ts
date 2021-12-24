import {Type} from "./type";

export class Category  {
   id:number;
   title:string;
   types:Type[];

  constructor(id:number,title:string,types:Type[]) {
    this.id=id;
    this.title=title;
    this.types=types;
  }

}
