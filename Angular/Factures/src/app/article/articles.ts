import { Article } from "./article";

export class Articles {
    private _articles: Article[] = [];

    constructor() { 
        this._articles = [
            { codi: 1, nom: "GPU", quantitat: 0, preu: 50, total: 0 },
            { codi: 2, nom: "CPU", quantitat: 0, preu: 50, total: 0 },
            { codi: 3, nom: "Ventilador", quantitat: 0, preu: 50, total: 0 },
            { codi: 4, nom: "Box", quantitat: 0, preu: 50, total: 0 },
            { codi: 5, nom: "RAM", quantitat: 0, preu: 50, total: 0 },
            { codi: 6, nom: "Font d'alimentació", quantitat: 0, preu: 50, total: 0 },
        ];
    }
    
    public get articles(): Article[] {
        return this._articles;
    }
    public set articles(value: Article[]) {
        this._articles = value;
    }
;

      
}