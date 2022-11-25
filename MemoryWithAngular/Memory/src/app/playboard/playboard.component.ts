import { Component, OnInit } from '@angular/core';
import { Board } from '../js/models/Board/board';

@Component({
  selector: 'app-playboard',
  templateUrl: './playboard.component.html',
  styleUrls: ['./playboard.component.css']
})
export class PlayboardComponent implements OnInit {
  playboard?: Board;
  constructor() { }

  ngOnInit(): void {
    this.playboard = new Board(4,6);
  }

}
