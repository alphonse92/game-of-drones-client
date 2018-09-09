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
    public getCurrentRound() {
        let offset = this.is_finish ? 1 : 0;
        return offset + this.current_round;
    }

    public getCurrentRoundInstance() {
        return this.rounds[this.current_round];
    }
    public getCurrentPlayerInstance() {
        return this.getCurrentRoundInstance().getPlayer(this.current_player)
    }

    /**
     * about the game
     */
    public move(move) {
        this.rounds[this.current_round].addMove(this.current_player, move);
        if (this.areAllPlayersMovedInCurrentRound()) {
            if (!this.getCurrentRoundInstance().isATie()) {
                return this.tryGoToNextRound();
            }
            return this.resolveTie();
        }
        return this.nextPlayer();
    }
    private nextPlayer() {
        this.current_player++;
        return this.getStatusMatch();
    }
    private resolveTie() {
        this.getCurrentRoundInstance().resetMoves();
        this.current_player = 0;
        return this.getStatusMatch(false, true);
    }

    private tryGoToNextRound() {
        let isMatchFinished = this.valideMatchFinished();
        let winner = this.getCurrentRoundInstance().getWinner();
        if (isMatchFinished) {
            return this.finishMatch(winner);
        }
        return this.nextRound(winner);

    }
    private nextRound(winner) {
        this.current_player = 0;
        this.current_round++;
        return this.getStatusMatch(false, false, winner);
    }

    private finishMatch(winner) {
        this.is_finish = true;
        this.winner = winner;
        return this.getStatusMatch(true, false, winner)
            .then(this.saveMatch.bind(this));

    }

    private saveMatch(data) {
        return this.MatchService.saveMatch(this.toJson())
            .then((result) => {
                data.result = result;
                return data;
            })
    }

    private getStatusMatch(finish: boolean = false, tie: boolean = false, winner = null) {
        return Promise.resolve({
            finish,
            tie,
            winner,
            current_player: this.getCurrentPlayerInstance().player,
            current_round: this.getCurrentRoundInstance(),
            result: null
        })
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

    public getWinner(): Player {
        let self = this;
        return null;
    }

    public toJson() {
        return {
            Players: this.Players,
            n_rounds: this.n_rounds,
            current_round: this.current_round,
            current_player: this.current_player,
            winner: this.winner,
            rounds: this.rounds.map(r => {
                return r.toJson();
            })
        };
    }


}