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

    public addMove(player: Player, move: string) {
        let idx = this.roundPlayersMap[player.getName()];
        this.roundPlayers[idx].move = move;
    }

    public getWinner(): Promise<Player> {
        let self = this;
        this.MatchService.getRoundWinner(this.roundPlayers);
        return null;

    }

}