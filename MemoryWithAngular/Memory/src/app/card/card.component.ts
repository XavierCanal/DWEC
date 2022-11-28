import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from '../js/interfaces/ICard/ICard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;
  @Output() clicked = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  cardClick() {
    this.clicked.emit([this.card.fila]);

  }


}
