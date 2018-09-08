import { Injectable } from '@angular/core';
import { Http, } from '@angular/http';
import { Player } from "src/app/models/player.model"
import { environment } from "src/environments/environment"
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private api = environment.api + "/player";
  constructor(private http: Http
  ) { }

  public getByName(names: string[]): Promise<Player[]> {
    return this.http.get(this.api, { params: { names } })
      .toPromise()
      .then(success => success.json())
      .then((players: any) => {
        let Players: Player[] = players.docs;
        return Promise.resolve(Players);
      })
  }
}
