import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel';
  /*hero: Hero = {
    id:1,
    name:"Captan America"
  }*/

  heroes:Hero[] = [
    {id:1, name:"Captan America"},
    {id:2, name:"Spiderman"},
    {id:3, name:"Thor"},
    {id:4, name:"Hulk"},
    {id:5, name:"Ironman"},
    {id:6, name:"Pau"}
  ];
  selectedHero?:Hero;

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  getTitle():string {
    return this.title;
  }

  setTitle(newTitle:string) {
    this.title = newTitle;
  }
}
