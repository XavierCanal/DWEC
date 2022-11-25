import { Article } from "./article";

export class Articles {
    private _articles: Article[] = [];
    private totalPrice: number = 0;

    constructor(empty:boolean) {
      if(empty) {
        this._articles = [];
      } else {
        this._articles = [
          { codi: 1, nom: "GPU", quantitat: 0, preu: 50, total: 0 },
          { codi: 2, nom: "CPU", quantitat: 0, preu: 50, total: 0 },
          { codi: 3, nom: "Ventilador", quantitat: 0, preu: 50, total: 0 },
          { codi: 4, nom: "Box", quantitat: 0, preu: 50, total: 0 },
          { codi: 5, nom: "RAM", quantitat: 0, preu: 50, total: 0 },
          { codi: 6, nom: "Font d'alimentació", quantitat: 0, preu: 50, total: 0 },
      ];
      }

    }

    public get articles(): Article[] {
        return this._articles;
    }
    public set articles(value: Article[]) {
        this._articles = value;
    }

    public updateTotal():number {
      this.totalPrice = 0;
      this._articles.forEach(element => {
        this.totalPrice = this.totalPrice + element.total;
      });
      return this.totalPrice;
    }

    public getIVA():number {
      return this.totalPrice*0.21;
    }

    public getImportTotal():number {
      return this.totalPrice - this.totalPrice*0.21;
    }

}
