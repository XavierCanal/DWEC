import { Component, OnInit } from '@angular/core';
import { Board } from '../js/models/Board/board';
import { Card } from '../js/models/Card/card';


@Component({
  selector: 'app-playboard',
  templateUrl: './playboard.component.html',
  styleUrls: ['./playboard.component.css']
})
export class PlayboardComponent implements OnInit {
  playboard?: Board;
  row:number=4;
  column:number=5;
  constructor() { }

  ngOnInit(): void {

  }

  generateBoard() {
    this.playboard = new Board(this.row,this.column);
  }

  handleCardClick([num]:[number]) {
    console.log("cardClick emit");
    alert("CARD "+num+"CLICKED")
  }

}
