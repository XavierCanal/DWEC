import { Card } from "../models/Card/card";
import { getCard } from "./getCard";

export function returnArrayFilledWithCards(x:number,actualRow:number):Array<Card>{
  console.log(actualRow);
    let completedArray:Array<Card>=[];
    for(let i = 0;i<x;i++){
        completedArray.push(getCard(i+1,actualRow));
    }

    return completedArray;
}
