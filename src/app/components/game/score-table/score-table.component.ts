import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.sass']
})
export class ScoreTableComponent implements OnInit {

  constructor() { }
  @Input() winners = [];
  ngOnInit() {
  }

}
