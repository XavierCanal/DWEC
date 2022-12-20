import { Standard } from "../Standard/standard";

export class Form {
  standardList: Array<Standard> = [];

  constructor() {
    this.generateDefaultStandardList();
  }

  generateDefaultStandardList() {
    for(let i=0; i < 4; i++) {
      console.log("he entrat1");
      this.standardList.push(new Standard());
      console.log("he entrat2");
    }
  }
}
