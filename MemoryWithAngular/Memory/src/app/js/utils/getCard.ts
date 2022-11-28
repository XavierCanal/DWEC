import { Card } from "../models/Card/card";

export function getCard(cardNumber:number,actualRow:number):Card{
    return new Card(cardNumber,actualRow);
}
