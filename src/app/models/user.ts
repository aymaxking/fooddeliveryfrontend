import {Role} from "./role";

export class User  {
   id?:number;
   username:string;
   password:string;
   role?:string


   constructor(username:string,password:string,id?:number,role?:string) {
     if (id != undefined) {
       this.id = id;
     }
     this.username=username;
     this.password=password;
     if (role != undefined) {
       this.role = role;
     }
   }
}
