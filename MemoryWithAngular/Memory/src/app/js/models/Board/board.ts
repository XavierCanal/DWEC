import { IBoard } from "../../interfaces/IBoard/iboard";
import { CardsRow } from "../CardsRow/cards-row";

export class Board implements IBoard {
    board: Array<CardsRow> =[];

    constructor(numberOfRows:number,numberOfColumns:number) {
        for(let i=0; i<numberOfRows;i++) {
            console.log("board")
            this.board.push(new CardsRow(numberOfColumns))
        }

    }
}
