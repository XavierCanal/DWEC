import { Component, OnInit } from '@angular/core';
import { Baralla } from 'src/app/Model/Entitats/Implementation/Baralla/Baralla';
import { Carta } from 'src/app/Model/Entitats/Implementation/Carta/Carta';
import { CartaSetIMig } from 'src/app/Model/Entitats/Implementation/Carta/CartaSetIMig';
import { Jugador } from 'src/app/Model/Entitats/Implementation/Jugador/Jugador';
import { BarallaService } from 'src/app/Model/Services/Baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  baralla!:Baralla;
  selectedCards:Array<CartaSetIMig> = [];
  passedHand:boolean=false;
  playerTotalValue:number=0;
  
  constructor(private barallaService:BarallaService) { }

  ngOnInit(): void {
    this.baralla = new Baralla();
    if(this.baralla != null) {
      this.baralla.barrejar();
    }
    
    //console.log(this.baralla.baralla[0].num);
  }


  girarCarta(carta: CartaSetIMig){
    this.baralla.cartes.splice(this.baralla.cartes.indexOf(carta), 1)

    if(!this.passedHand) {
      carta.status = true;
      this.selectedCards.push(carta);
      this.validHand();
    } else {
      alert("no pots seleccionar més cartes..")
    }
    
  }

  validHand() {
    this.playerTotalValue=0;
    this.selectedCards.forEach(element =>  {
      this.playerTotalValue += element.valor;
    });
    if (this.playerTotalValue > 7.5) {
      this.passedHand=true;
      alert("HAS SUPERAT 7.5, TORNA A COMENÇAR");
    }
  }

  sendAlert(msg:string) {
    alert(msg)
  }

  refresh(): void {
    window.location.reload();
}

}
