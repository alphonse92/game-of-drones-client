import { Round } from "./round.model";
import { MatchService } from "src/app/services/match/match.service"
import { Winnable } from "./winnable.interface";
import { Player } from "./player.model";

export class Match implements Winnable {

    private winner: Player = null;
    private rounds: Round[] = [];
    private current_round: number = 0;
    private current_player: number = 0;
    private is_finish = false;

    constructor(
        private MatchService: MatchService,
        private Players: Player[],
        private n_rounds: number,
    ) {
        for (let i = 0; i < this.n_rounds; i++) {
            this.rounds.push(new Round(MatchService, this.Players));
        }
    }

    /**
     * Setters, getters 
     */
    public setRound(round: number) {
        this.current_round = round
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


    /**
     * about the game
     */
    public move(move) {
        this.rounds[this.current_round].addMove(this.current_player, move);
        if (this.areAllPlayersMovedInCurrentRound()) {
            this.nextRound();
        }
    }

    private nextRound() {
        let isMatchFinished = this.valideMatchFinished();
        if (isMatchFinished) {
            return this.finishMatch()
        }

        this.current_round++;

    }

    private finishMatch() {
        this.is_finish = true;
        /**
         * store in db
         * emit event notifying and if a player is an emperor
         * 
         */
    }

    private isLastRound() {
        return this.current_round === this.rounds.length - 1;
    }

    private areAllPlayersMovedInCurrentRound() {
        return this.rounds[this.current_round].areAllPlayersMove()
    }

    private valideMatchFinished() {
        return this.isLastRound() && this.areAllPlayersMovedInCurrentRound();
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

    public toJson() {
        return {
            Players: this.Players,
            n_rounds: this.n_rounds,
            current_round: this.current_round,
            current_player: this.current_player
        };
    }


}