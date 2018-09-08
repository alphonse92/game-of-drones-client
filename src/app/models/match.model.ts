import { Round } from "./round.model";
import { MatchService } from "src/app/services/match/match.service"
import { Winnable } from "./winnable.interface";
import { Player } from "./player.model";

export class Match implements Winnable {

    private winner: Player = null;
    private rounds: Round[] = [];
    constructor(
        private MatchService: MatchService,
        private Players: Player[],
        private n_rounds: number,
    ) {
        for (let i = 0; i < this.n_rounds; i++) {
            this.rounds.push(new Round(MatchService, this.Players));
        }
    }

    public setRounds(rounds: Round[]) {
        this.rounds = rounds;
    }
    public getRounds(): Round[] {
        return this.rounds
    }

    public addRound(round: Round) {
        this.rounds.push(round);
    }

    public getWinner(): Promise<Player> {
        let self = this;
        return this.MatchService
            .getMatchWinner(this.rounds)
            .then((Winner: Player) => {
                self.winner = Winner;
                return self.winner;
            })
    }

    public getEmperor() {

    }


}