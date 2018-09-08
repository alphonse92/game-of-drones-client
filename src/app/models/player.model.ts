import { PlayerService } from "src/app/services/player/player.service";

export class Player {
    private name: string;
    private games_played: number;
    private games_won: number;

    private param_order = ["name", "games_played", "games_won"];
    constuctor(...params: any[]) {
        let self = this;
        params.forEach((element, idx) => {
            self[this.param_order[idx]] = element;
        });
    }

    public getName(): string { return this.name }
    public setName(name: string) { this.name = name }

    public getGamesWon(): number { return this.games_played }
    public setGamesWon(value: number) { this.games_won = value }

    public getGamesPlayed(): number { return this.games_won }
    public setGamesPlayed(value: number) { this.games_played = value }

    public static getByName(name: string): Promise<Player> {
        return PlayerService.getByName(name)
    }

}