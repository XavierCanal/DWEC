import { IBoard } from "../../interfaces/IBoard/iboard";
import { CardsRow } from "../CardsRow/cards-row";

export class Board implements IBoard {
    board: Array<CardsRow> =[];

    constructor(numberOfRows:number,numberOfColumns:number) {
        for(let i=0; i<numberOfRows;i++) {
            this.board.push(new CardsRow(numberOfColumns,i+1))
        }

    }

    showAllCards() {
      this.board.forEach(element => {
        element.row.forEach(element => {
          element.reveal(10);
        });
      });
    }

    hideAllCards() {
      this.board.forEach(element => {
        element.row.forEach(element => {
          element.hide();
        });
      });
    }
}
