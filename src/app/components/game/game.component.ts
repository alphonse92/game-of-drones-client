import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service'
import { Player } from '../../models/player.model';
import { MatchService } from '../../services/match/match.service';
import { Match } from '../../models/match.model';
import { MatchComponent } from './match/match.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  private windows = {
    welcome: {
      name: "welcome",
      next: "config",
    },
    config: {
      name: "config",
      next: "match",
    },
    match: {
      name: "match",
      next: "summary"
    },
    summary: {
      name: "summary",
      next: "welcome"
    },
  }

  private current_window_default = this.windows.welcome;
  private current_window = this.current_window_default;
  private last_window = null;
  private current_match = null;
  private summary = null;

  @ViewChild('MatchComponent') MatchComponent: MatchComponent;
  @ViewChild('SummaryComponent') MatchSummaryComponent: MatchSummaryComponent;

  constructor(
    private LocalstorageService: LocalstorageService,
    private MatchService: MatchService
  ) { }

  ngOnInit() {
    let current_window = this.LocalstorageService.get("current_window")
    let current_match = this.LocalstorageService.get("match")
    let summary = this.LocalstorageService.get("summary")

    if (current_match && current_window.name === this.windows.match.name)
      this.initMatchWindow(current_match);
    else if (summary && current_window.name === this.windows.summary.name)
      this.initSummaryWindow(summary);
    else
      this.initWelcome();

  }

  private initWelcome() {
    this.current_window = this.current_window_default;
    this.LocalstorageService.reset();
  }

  private initMatchWindow(m) {
    let current_match = m;
    let match = new Match(this.MatchService, current_match.Players, current_match.n_rounds)
    match.setRound(current_match.current_round);

    this.current_window = this.windows.match;
    this.current_match = match;
  }

  private initSummaryWindow(summary) {
    this.summary = summary;
    this.current_window = this.windows.summary;
  }


  onConfigured(PlayersDataPromise: Promise<Player[]>) {
    let self = this;
    PlayersDataPromise
      .then((Players: Player[]) => {
        self.current_match = new Match(self.MatchService, Players, 3)
        self.saveMatchData(self.current_match.toJson())
        self.summary = null;
        self.next();
      })
    this.MatchComponent.reset();

  }

  onFinishMatch(summary) {
    this.saveMatchData(null); //clear last match data
    this.saveSummary(summary); // store the summary results
    this.summary = summary
    this.MatchSummaryComponent.setSummary(this.summary);
    this.next();
  }

  private saveMatchData(data) {
    this.LocalstorageService.set("match", data)
  }

  private saveSummary(data) {
    this.LocalstorageService.set("summary", data)
  }

  private finishGame() {
    this.LocalstorageService.reset();
    this.next();
  }

  next() {
    this.last_window = this.current_window;
    this.current_window = this.windows[this.current_window.next];
    this.LocalstorageService.set("current_window", this.current_window)
  }

}
