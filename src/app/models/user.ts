import {Role} from "./role";

export class User  {
   id?:number;
   username:string;
   password:string;
   role?:string;
  img:any;


  constructor(username:string,password:string,img?:any,id?:number,role?:string) {
     if (id != undefined) {
       this.id = id;
     }
     this.username=username;
     this.password=password;
    if (img != undefined) {
      this.img = img;
    }
     if (role != undefined) {
       this.role = role;
     }
   }
}
