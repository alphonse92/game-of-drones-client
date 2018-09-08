import { Player } from "./player.model";

export interface Winnable {
    getWinner(): Promise<Player>
}