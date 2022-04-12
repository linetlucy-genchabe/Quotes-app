import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {


  @Output()
  upVotes = 0;
  downVotes = 0;

  upVote(){
    this.upVotes = this.upVotes + 1;//adds one on mouse click
    console.log(this.upVotes)
  }
  

  downVote(){
    this.downVotes = this.downVotes + 1;//adds one per mouse click
  }
  constructor() { }

  ngOnInit(): void {
  }

}
