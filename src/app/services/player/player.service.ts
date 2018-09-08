import { Injectable } from '@angular/core';
import { Player } from "src/app/models/player.model"
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  public static getByName(name: string): Promise<Player> {
    return null;
  }
}
