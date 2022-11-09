import { Component, OnInit } from '@angular/core';
import { Articles } from "./articles"
import {Article } from "./article"


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  
  art = new Articles();
  selectedArticlesArray:Article[] = [];
  arrayArticles:Article[] = this.art.articles;
  selectedArticle: Article = this.arrayArticles[0];

  constructor() { 
  }

  ngOnInit(): void {
  }

  public addArticle():void{
    //console.log(JSON.stringify(this.selectedArticle))
    const foundValue = this.selectedArticlesArray.find((obj) => {
      return obj === this.selectedArticle;
    });
    if (foundValue){
      this.selectedArticlesArray.forEach(element => {
        if (element.codi === this.selectedArticle.codi) {
          element.quantitat++;
        }
      });
    } else {
      this.selectedArticlesArray.push(this.selectedArticle);
    }
    
  }

  public updateTotal(article : Article){
    this.selectedArticlesArray.forEach(element => {
      if (article.codi === this.selectedArticle.codi) {
        element.quantitat = article.quantitat;
        element.total = article.quantitat * article.preu;
      }
    });
  }

}
