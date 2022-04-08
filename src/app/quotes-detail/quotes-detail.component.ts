import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input()
  quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
