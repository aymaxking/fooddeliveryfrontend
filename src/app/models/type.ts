export class Type {
  id?: number;
  title: string;
  icon?: string;

  constructor(title: string, id?: number, icon?: string) {
    if (id != undefined)
      this.id = id;
      this.title = title;
    if (icon != undefined)
      this.icon = icon;
  }

}
