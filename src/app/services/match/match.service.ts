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
  private api_player = environment.api + "/player";
  constructor(private http: Http
  ) { }


  public saveMatch(match): any {
    return this.http.post(this.api, match)
      .toPromise()
      .then(success => success.json())

  }

  public getSummary(): any {
    return this.http.get(this.api_player + "/summary")
      .toPromise()
      .then(success => success.json())
  }



}
