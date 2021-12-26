import {Type} from "./type";

export class Category  {
   id?:number;
   title:string;
   types?:Type[];

  constructor(title:string,id?:number,types?:Type[]) {
    if (id != undefined) {
      this.id = id;
    }
    if (types != undefined) {
      this.types=types;
    }
    this.title=title;
  }


}
