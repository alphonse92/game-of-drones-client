

export class Player {

    private name: string;
    private games_played: number = 0;
    private games_won: number = 0;

    public getName(): string { return this.name }
    public setName(name: string) { this.name = name }

    public getGamesWon(): number { return this.games_played }
    public setGamesWon(value: number) { this.games_won = value }

    public getGamesPlayed(): number { return this.games_won }
    public setGamesPlayed(value: number) { this.games_played = value }

    static getMock(name: string): any {
        let player: Player = null;
    }
}

export class PlayerBuilder {

    private instance: Player = null;
    constructor() {
        this.instance = new Player();
    }
    public withName(name: string) {
        this.instance.setName(name);
        return this;
    }
    public withGamesPlayed(val: number) {
        this.instance.setGamesPlayed(val);
        return this;
    }
    public withGamesWon(val: number) {
        this.instance.setGamesWon(val);
        return this;
    }
    public build() {
        return this.instance;
    }
}