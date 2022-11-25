import { CartaSetIMig } from "../../Implementation/Carta/CartaSetIMig";

export interface IJugador {
    nom:string;
    cartes: Array<CartaSetIMig>;

    agafar(carta:CartaSetIMig):void;
    contar():number;
}