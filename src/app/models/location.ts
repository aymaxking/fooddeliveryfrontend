export class Location{
  id?:number;
  location:string;

  constructor(location:string,id?:number) {
    this.id=id;
    this.location=location;
  }
}
