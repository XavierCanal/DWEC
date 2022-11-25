import { Card } from "../models/Card/card";

export function getCard(cardNumber:number):Card{
    return new Card(cardNumber);
}