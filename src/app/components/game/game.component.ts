import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service'
import { Player } from '../../models/player.model';
import { MatchService } from '../../services/match/match.service';
import { Match } from '../../models/match.model';
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
      next: "match"
    },
  }

  private current_window_default = this.windows.welcome;
  private current_window = this.current_window_default;
  private last_window = null;
  private current_match = null;
  constructor(
    private LocalstorageService: LocalstorageService,
    private MatchService: MatchService
  ) { }

  ngOnInit() {
    let current_window = this.LocalstorageService.get("current_window")
    let current_match = this.LocalstorageService.get("match")
    if (current_match && current_window.name === this.windows.match.name)
      this.initMatchWindow(current_match);
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
    console.log(this.current_match)
  }


  onConfigured(PlayersDataPromise: Promise<Player[]>) {
    let self = this;
    PlayersDataPromise
      .then((Players: Player[]) => {
        console.log(Players);
        self.current_match = new Match(self.MatchService, Players, 3)
        self.LocalstorageService.set("match", self.current_match.toJson())
        self.next();
      })

  }

  onFinishMatch(onFinishMatchPromise) {

  }

  next() {
    this.last_window = this.current_window;
    this.current_window = this.windows[this.current_window.next];
    this.LocalstorageService.set("current_window", this.current_window)
  }

}
