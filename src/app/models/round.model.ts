import { Player } from "./player.model";
import { MatchService } from "src/app/services/match/match.service"
import { Winnable } from "./winnable.interface";
export class Round implements Winnable {


    private roundPlayers: { player: Player, move: string }[] = [];
    private roundPlayersMap = {}
    private winner: Player;
    private moveDefault = "";

    private rules = {
        "Rock": "Scissors",
        "Scissors": "Paper",
        "Paper": "Rock"
    }
    constructor(private MatchService: MatchService, Players: Player[]) {
        this.roundPlayers = Players.map(player => {
            return { player, move: this.moveDefault }
        })
    }

    public addPlayer(player: Player) {
        this.roundPlayers.push({ player, move: null })
        this.roundPlayersMap[player.getName()] = this.roundPlayers.length - 1;
    }

    public addMove(player: number, move: string) {
        this.roundPlayers[player].move = move;
    }
    public getPlayers() {
        return this.roundPlayers;
    }
    public getPlayer(player: number): { player: Player, move: string } {
        return this.roundPlayers[player];
    }


    public getWinner(): Player {
        if (this.isATie()) { };

        let roundPlayer1 = this.getPlayer(0);
        let roundPlayer2 = this.getPlayer(1);

        return this.validePlayerBeatTo(roundPlayer1, roundPlayer2) ?
            roundPlayer1.player :
            roundPlayer2.player;
    }

    public validePlayerBeatTo(roundPlayer1, roundPlayer2) {
        console.log(roundPlayer1, "vs", roundPlayer2, roundPlayer1.move, roundPlayer2.move)
        return this.rules[roundPlayer1.move] === roundPlayer2.move;
    }

    public resetMoves() {
        this.roundPlayers = this.roundPlayers.map(rp => {
            rp.move = this.moveDefault;
            return rp;
        })
    }
    public isATie() {
        console.log("is a tie?", this.getPlayer(0).move, this.getPlayer(1).move)
        console.log(this.getPlayer(0), this.getPlayer(1))
        return this.getPlayer(0).move === this.getPlayer(1).move
    }

    public areAllPlayersMove(): any {
        return this.roundPlayers.reduce((out, playerRound) => {
            out = out && !!playerRound.move
            return out;
        }, true)
    }

}