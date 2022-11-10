import { Component, OnInit } from '@angular/core';
import { Articles } from "./articles"
import {Article } from "./article"


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  art = new Articles(false);
  articles = new Articles(true);

  arrayArticles:Article[] = this.art.articles;
  selectedArticle: Article = this.arrayArticles[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  public addArticle():void{
    const foundValue = this.articles.articles.find((obj) => {
      return obj === this.selectedArticle;
    });
    if (foundValue){
      this.articles.articles.forEach(element => {
        if (element.codi === this.selectedArticle.codi) {
          element.quantitat++;
          element.total = element.quantitat * element.preu;
        }
      });
    } else {
      this.articles.articles.push(this.selectedArticle);
    }

  }

  public updateTotal(article : Article){
    const input = document.getElementById(article.codi+"_quantitat") as HTMLInputElement | null;
    const value = input?.value;

    if(!isNaN(Number(value))) {
      this.articles.articles.forEach(element => {
        if (article.codi === element.codi) {
          element.quantitat = Number(value);
          element.total = article.quantitat * article.preu;
        }
      });
    } else {
      alert("Not valid value")
    }

  }

}
