import { Player } from "./player.model";

export class Match {

    private matchPlayers: any = {};

    private param_order = ["name", "games_played", "games_won"];
    constuctor(...params: any[]) {
        let self = this;
        params.forEach((element, idx) => {
            self[this.param_order[idx]] = element;
        });
    }

    public addPlayer(player: Player) {
        this.matchPlayers[player.getName()] = { player, move: null }
    }

    public addMove(player: Player, move: string) {
        let playerMatch = this.matchPlayers[player.getName()];
        if (!playerMatch) return false;

        this.matchPlayers[player.getName()].move = move;
        return true;
    }

    public getWinner() {
        //notice forced to two players
        let self = this;
        let playersArray = Object
            .keys(this.matchPlayers)
            .map(playerMatchName => self.matchPlayers[playerMatchName])

        /**
         * logic to consult to backend
         */

    }

}