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


  save
  
}
