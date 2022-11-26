import { ICard } from "../../interfaces/ICard/ICard";

export class Card implements ICard {
    num:number;
    revealed= false;

    constructor(num:number){
        this.num=num;
    }
}
