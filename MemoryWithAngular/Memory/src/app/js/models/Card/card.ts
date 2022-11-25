import { ICard } from "../../interfaces/ICard/ICard";

export class Card implements ICard {
    num:number;

    constructor(num:number){
        this.num=num;
    }
}
