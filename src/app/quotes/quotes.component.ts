//  import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1,"The two most powerful warriors are patience and time","AUTHOR: Leo Tolstoy",new Date()),
    new Quotes(2, 'Time is money', 'AUTHOR: Benjamin Franklin',new Date()),
    new Quotes(3,'Better three hours too soon than a minute too late','AUTHOR: William Shakespeare',new Date()),
    new Quotes(4, 'Time is money', 'AUTHOR: Benjamin Franklin',new Date()),
    new Quotes(5, 'Time is money', 'AUTHOR: Benjamin Franklin',new Date()),
    new Quotes(6, 'Time is money', 'AUTHOR: Benjamin Franklin',new Date()),
    new Quotes(7, 'Time is money', 'AUTHOR: Benjamin Franklin',new Date()),
    
  ];


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.startDate = new Date(quote.startDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete: any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
}
