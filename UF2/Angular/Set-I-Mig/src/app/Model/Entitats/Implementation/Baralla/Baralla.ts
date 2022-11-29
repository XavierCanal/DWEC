import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";
import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { Utils } from "src/app/Projecte/Utils/Utils";

export class Baralla implements IBarallaSetIMig {
    cartes : Array<ICartaSetIMig> = new Array<ICartaSetIMig>;

    barrejar(): void {
        for (let index = 0; index < this.cartes.length; index++) this.canviar(index);
    }

    constructor() {
        this.generarBaralla();
    }

    generarBaralla() {
        const pals:any = {oro:"https://www.trivin.es/wp-content/themes/nirvana/images/cards/oros",copas:"https://www.trivin.es/wp-content/themes/nirvana/images/cards/copas",espadas:"https://www.trivin.es/wp-content/themes/nirvana/images/cards/espadas",bastos:"https://www.trivin.es/wp-content/themes/nirvana/images/cards/bastos"};
        var key : string;
        for (key in pals) {
            for (let i = 1; i < 13; i++) {
                if(i!=8 && i!=9) {
                    if(i>=10){
                        this.cartes.push(new CartaSetIMig(i,key,pals[key]+"_"+i+".png",false))
                    } else {
                        this.cartes.push(new CartaSetIMig(i,key,pals[key]+"_0"+i+".png",false))
                    }
                    
                }
                
              }
        }
    }

    private canviar(index:number) {
        const index2=Utils.getRandom(this.cartes.length);
        this.intercanviar(index,index2);
    }

    private intercanviar(index:number,index2:number) {
        const aux=this.cartes[index];
        this.cartes[index] = this.cartes[index2];
        this.cartes[index2] = aux;
    }
}