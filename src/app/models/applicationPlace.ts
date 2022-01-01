import {Application} from "./application";

export class ApplicationPlace extends Application {

  description:string;
  constructor(id:number,name:string,date:string,email:string,number:string,description:string) {
    super(id,name,date,email,number);
    this.description=description;
  }
}
