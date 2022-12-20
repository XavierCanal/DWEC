import { Valoration } from "../Valoration/valoration";

export class Standard {
  name!: string;
  valorations: Array<Valoration> = [];

  constructor() {
    this.generateDefaultValorationList();
  }

  generateDefaultValorationList() {
    this.name = "Default";
    for(let n = 0; n < 3; n++) {
      this.valorations.push(new Valoration("value"+n,0))
    }
  }
}
