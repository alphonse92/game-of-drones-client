import { Injectable } from '@angular/core';
import { Http, } from '@angular/http';
import { Player } from "src/app/models/player.model"
import { environment } from "src/environments/environment"
import { Round } from '../../models/round.model';
import { Match } from '../../models/match.model';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private api = environment.api + "/match";
  constructor(private http: Http
  ) { }



  public getMatchWinner(rounds: Round[]): Promise<Player> {
    return this.http.post(this.api, rounds)
      .toPromise()
      .then(success => success.json())

  }

  public getRoundWinner(roundPlayer: { player: Player, move: string }[]): Promise<Player> {
    return this.http.post(this.api, roundPlayer)
      .toPromise()
      .then(success => success.json())

  }
}
