import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass']
})
export class ConfigComponent implements OnInit {

  private players = [];
  private error = "";
  @Output() configured = new EventEmitter();
  constructor() {
    for (let i = 1; i <= environment.total_players; i++) {
      this.players.push({ label: "Player " + i, name: "" });
    }
  }

  ngOnInit() {
  }

  public start_game() {
    if (this.validePlayerNames()) {
      this.error = "";
      return this.configured.emit(this.getPlayerInstanceObjects())
    }
    this.error = "The player name must be a alpha-numeric string without special characters"
  }

  private getPlayerInstanceObjects() {
    return Promise.all(this.players.map(player => {
      return Player.getByName(player.name);
    }))
  }

  private validePlayerNames() {
    let self = this;
    return this.players.reduce((out, player) => {
      out = out && self.valideName(player.name);
      return out;
    }, true)
  }
  private valideName(name) {
    return /^[A-Za-z0-9]+$/.test(name)
  }

}
