import { ICarta } from "../../Interfaces/Carta/ICarta";

export class Carta implements ICarta {
    num: number;
    pal: string;
    img: string;
    status: boolean;

    constructor(num: number, pal:string, img: string, status:boolean) {
        this.num = num;
        this.pal = pal;
        this.img = img;
        this.status = status;
    }
}