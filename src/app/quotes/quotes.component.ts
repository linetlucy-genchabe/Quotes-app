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
  function($scope: { members: { name: string; Votes: number; }[]; incrementUp: (member: any) => void; incrementDown: (member: any) => void; }){
 
    var members =[
      {name: "John Smith", Votes: 0},
      {name: "Claire Temple", Votes: 0},
    ];					
   
    $scope.members = members;
   
    $scope.incrementUp = function(member: { Votes: number; }){
      member.Votes++;
    }
    $scope.incrementDown = function(member: { Votes: number; }){
      member.Votes--;
    }
}
}
