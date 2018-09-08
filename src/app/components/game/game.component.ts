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
      next: "round",
    },
    match: {
      name: "match"
    },
  }
  private current_window_default = this.windows.welcome;
  private current_window = this.current_window_default;
  private last_window = null;
  private match = null;
  constructor(
    private LocalstorageService: LocalstorageService,
    private MatchService: MatchService
  ) { }

  ngOnInit() {
    this.current_window = this.LocalstorageService.get("current_window") || this.current_window_default
  }
  onConfigured(PlayersDataPromise: Promise<Player[]>) {
    let self = this;
    PlayersDataPromise
      .then((Players: Player[]) => {
        console.log(Players);
        self.LocalstorageService.set("match", this.match)
        self.match = new Match(self.MatchService, Players, 3)
        self.next();
      })

  }
  next() {
    this.last_window = this.current_window;
    this.current_window = this.windows[this.current_window.next];
    this.LocalstorageService.set("current_window", this.current_window)
  }

}
