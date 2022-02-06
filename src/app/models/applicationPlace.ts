import {Application} from "./application";

export class ApplicationPlace extends Application {

  description:string;
  constructor(id:number,name:string,date:string,email:string,number:string,description:string,etat:string,img:any) {
    super(id,name,date,email,number,etat,img);
    this.description=description;
  }
}
