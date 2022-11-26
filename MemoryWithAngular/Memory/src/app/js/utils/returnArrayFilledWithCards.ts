import { Card } from "../models/Card/card";
import { getCard } from "./getCard";

export function returnArrayFilledWithCards(x:number):Array<Card>{
    let completedArray:Array<Card>=[];
    for(let i = 0;i<x;i++){
        completedArray.push(getCard(i+1));
    }

    return completedArray;
}
