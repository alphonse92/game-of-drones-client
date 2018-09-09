import { Player } from "./player.model";

export interface Winnable {
    getWinner(): Player
}