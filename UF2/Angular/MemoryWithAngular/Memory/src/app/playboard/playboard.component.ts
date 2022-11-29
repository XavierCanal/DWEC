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
  correct:boolean=true;
  row:number=4;
  column:number=4;
  actualRow:number=0;
  lastNumber:number=0;
  showingCards:boolean=false;
  winObjective:number = 0;
  selectedCards:Array<Card>=[];
  constructor() { }

  ngOnInit(): void {

  }

  generateBoard() {
    this.playboard = new Board(this.row,this.column);
    this.actualRow = 1;
    this.playboard.showAllCards();
  }

  handleCardClick([num]:[number],card:Card) {
    if (!this.showingCards) {
      if (this.lastNumber == 0) {
        this.lastNumber = card.num;
      }
      if(num==this.actualRow) {
        card.reveal(0);

        if(this.correct){
          console.log("correct");

          if(this.lastNumber == card.num) {
            this.correct=true;
          } else {
            this.correct=false;
          }
          this.lastNumber = card.num;
        }

        //console.log(this.actualRow + "   " + this.row)
        if (this.actualRow == this.row) {
          this.showingCards = true;
          this.selectedCards.push(card);
          setTimeout(() => {
            if(!this.correct) {
              this.selectedCards.forEach(element => {
                element.hide();
              });
              this.selectedCards = [];
            } else {
              this.winObjective++;
              this.selectedCards = [];
              if (this.winObjective == this.row) {
                console.log("YOU WIN! Restarting the game..");
                setTimeout(() => {
                  this.playboard?.hideAllCards;
                },1000);
              }
            }
            this.correct=true;
            this.actualRow=1;
            this.showingCards=false;
          }, 3000)
        } else {
          this.selectedCards.push(card);
          this.actualRow++;
        }

      }

    }
  }

}
