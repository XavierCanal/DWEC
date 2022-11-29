import { ICarta } from "./ICarta";

export interface ICartaSetIMig  extends ICarta {
    valor:number;
    setValue(num:number):void;
}