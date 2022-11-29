import { ICard } from "../../interfaces/ICard/ICard";

export class Card implements ICard {
    num:number;
    revealed= false;
    fila?:number;

    constructor(num:number,row:number){
        this.num=num;
        this.fila=row;
    }

    reveal(seconds:number):void{
      this.revealed = true;
      if (seconds != 0){
        setTimeout(() => {
          this.revealed = false;
        }, seconds*1000)
      }
    }

    hide():void{
      this.revealed = false;
    }
}
