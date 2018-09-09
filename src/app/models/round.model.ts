import { Player } from "./player.model";
import { MatchService } from "src/app/services/match/match.service"
import { Winnable } from "./winnable.interface";
export class Round implements Winnable {


    private roundPlayers: { player: Player, move: string }[] = [];
    private roundPlayersMap = {}
    private winner: Player;

    constructor(private MatchService: MatchService, private Players: Player[]) {
        this.Players = Players;
    }

    public addPlayer(player: Player) {
        this.roundPlayers.push({ player, move: null })
        this.roundPlayersMap[player.getName()] = this.roundPlayers.length - 1;
    }

    public addMove(player: number, move: string) {
        this.roundPlayers[player].move = move;
    }

    public getWinner(): Promise<Player> {
        let self = this;
        this.MatchService.getRoundWinner(this.roundPlayers);
        return null;

    }

    public areAllPlayersMove(): any {
        return this.roundPlayers.reduce((out, playerRound) => {
            out = out && !!playerRound.move
            return out;
        }, true)
    }

}