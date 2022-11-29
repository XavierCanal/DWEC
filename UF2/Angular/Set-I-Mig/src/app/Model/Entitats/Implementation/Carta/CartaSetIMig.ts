import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { Carta } from "./Carta";


export class CartaSetIMig extends Carta implements ICartaSetIMig {
    valor!: number;
    
    constructor(num:number,pal:string,img:string,status:boolean) {
        super(num,pal,img,status);
        this.setValue(num);
    }

    public setValue(num:number) {
        if(num < 8) {
            this.valor = num;
        } else {
            this.valor = 0.5;
        }
    }
}