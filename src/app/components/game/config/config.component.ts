import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player, PlayerBuilder } from 'src/app/models/player.model';
import { PlayerService } from "src/app/services/player/player.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass']
})
export class ConfigComponent implements OnInit {

  private players: { label: string, name: string }[] = [];
  private error = "";
  @Output() configured: EventEmitter<Promise<Player[]>> = new EventEmitter<Promise<Player[]>>();
  constructor(private PlayerService: PlayerService) {
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

  private getPlayerInstanceObjects(): Promise<Player[]> {
    let playerNames: string[] = this.players.map(player => player.name);
    return this.PlayerService
      .getByName(playerNames)
      .then((Players: Player[]) => {
        let playerThatExist = Players.map(p => p.getName())
        let missingPlayersInstances: Player[] =
          playerNames.reduce((array: Player[], name: string) => {
            if (!playerThatExist.includes(name))
              array.push(new PlayerBuilder().withName(name).build())
            return array;
          }, [])
        Players = Players.concat(missingPlayersInstances);
        return Players;
      })
  }

  private validePlayerNames() {
    let self = this;
    let current_names = {};
    return this.players.reduce((out, player) => {
      out = out && self.valideName(player.name) && !current_names[player.name]
      current_names[player.name] = true;
      return out;
    }, true)
  }
  private valideName(name) {
    return /^[A-Za-z0-9]+$/.test(name)
  }

}
