import { Injectable } from '@angular/core';
import { Baralla } from '../../Entitats/Implementation/Baralla/Baralla';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  baralla:Baralla=new Baralla();
  constructor() { }
  getBaralla() { return this.baralla; }

}
