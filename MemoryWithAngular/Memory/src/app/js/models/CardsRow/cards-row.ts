import { ICardsRow } from "../../interfaces/ICardsRow/ICardsRow";
import { returnArrayFilledWithCards } from "../../utils/returnArrayFilledWithCards";
import { shuffleArray } from "../../utils/shuffleArray";
import { Card } from "../Card/card";

export class CardsRow implements ICardsRow {
    row: Array<Card>;

    constructor(x:number){
        console.log("cardsRow")
        this.row = returnArrayFilledWithCards(x);
    }

    shuffleCards(){
        this.row = shuffleArray(this.row);
    }
}
