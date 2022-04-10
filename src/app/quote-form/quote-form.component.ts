import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quotes (0,"","",new Date,0,0)
  @Output() addQuote =new EventEmitter<Quotes>();
startDate = new Date();
  
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote=new Quotes(0,'','',new Date,0,0)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
