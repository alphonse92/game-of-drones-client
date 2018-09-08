import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service'
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
    round: {
      name: "round"
    },
  }
  private current_window_default = this.windows.welcome;
  private current_window = this.current_window_default;

  constructor(
    private LocalstorageService: LocalstorageService
  ) { }

  ngOnInit() {
    this.current_window = this.LocalstorageService.get("current_window") || this.current_window_default
  }
  onConfigured(PlayersDataPromise) {
    PlayersDataPromise
      .then(playersArray => {
        console.log(playersArray);

      })
    // this.next();
  }
  next() {
    this.current_window = this.windows[this.current_window.next];
    this.LocalstorageService.set("current_window", this.current_window)
  }

}
