import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Model/Entitats/Implementation/Carta/Carta';
import { CartaSetIMig } from 'src/app/Model/Entitats/Implementation/Carta/CartaSetIMig';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  carta!: CartaSetIMig;
  constructor() { }

  ngOnInit(): void {
    this.carta = new CartaSetIMig(12,"pal","https://i.pinimg.com/originals/95/8f/92/958f92563de98928686d81f31b357490.jpg",false);
    console.log(this.carta);
  }

}
