import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../services/match/match.service';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.sass']
})
export class GameSummaryComponent implements OnInit {

  private players = [];

  constructor(private MatchService: MatchService) { }

  ngOnInit() {
    this.MatchService.getSummary()
      .then(PlayersSummary => {
        console.log(PlayersSummary)
        this.players = PlayersSummary.slice(0, 10)
      })
  }

}
