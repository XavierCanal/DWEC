import { Valoration } from "../Valoration/valoration";

export class Standard {
  name!: string;
  valorations: Array<Valoration> = [];

  constructor() {
    if(!this.valorations.length) {
      this.generateDefaultValorationList();
    } else {
      this.pushNewDefaultValoration();
    }

  }

  generateDefaultValorationList() {
    this.name = "Name";
    for(let n = 0; n < 3; n++) {
      this.valorations.push(new Valoration("Nom del Valor : "+n,0))
    }
  }

  pushNewDefaultValoration(){
    this.valorations.push(new Valoration("Nom del Valor : "+(this.valorations.length+1),0))
  }
}
