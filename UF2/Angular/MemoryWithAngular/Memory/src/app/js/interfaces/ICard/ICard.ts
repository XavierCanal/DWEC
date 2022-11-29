export interface ICard {
    num:number;
    revealed: boolean;
    fila?:number;
    reveal(seconds:number):void;
    hide():void;
}
