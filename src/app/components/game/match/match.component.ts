import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Match } from '../../../models/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass']
})
export class MatchComponent implements OnInit {

  constructor() { }
  @Input("match") match: Match;
  @Output() onFinish: EventEmitter<Match> = new EventEmitter<Match>();
  private label_select = "Select Move";
  private button_label = "Ok"

  ngOnInit() {
    console.log(this.match)
  }

  playerMove(data) {
    console.log(data);
  }
  
  



}