import { Injectable } from '@angular/core';
import { Jugador } from '../../Entitats/Implementation/Jugador/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private jugador:Jugador = new Jugador("1");
  constructor() { }
  getJugador():Jugador { return this.jugador;}
}
