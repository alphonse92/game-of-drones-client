import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Match } from '../../../models/match.model';
import { SelectComponent } from '../ui/select/select.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass']
})
export class MatchComponent implements OnInit {

  constructor() { }
  @Input("match") match: Match;
  @Output() onFinish: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('select') SelectComponent: SelectComponent;

  private label_select = "Select Move";
  private button_label = "Ok"
  private selected_move = null;
  private is_finish = false;

  private current_round;
  private current_player;

  private winners = [];
  private winners_map = {};

  private options: string[] = ["Rock", "Paper", "Scissors"]
  ngOnInit() {
    if (this.match)
      this.current_round = this.match.getCurrentRoundInstance();

    this.reset();

  }

  public reset() {
    this.winners = [];
  }


  private onMoveSelected(value) {
    this.selected_move = value;
  }

  private move() {
    if (!this.selected_move)
      return console.error("No se ha seleccionado ningún movimiento");
    let self = this;
    this.match
      .move(this.selected_move)
      .then(current_data => {

        self.current_round = current_data.current_round;
        self.current_player = current_data.current_player;
        let winner = current_data.winner

        if (current_data.tie) {
        } else if (current_data.finish) {
          self.addResult(winner)
          this.onFinish.emit({ result: current_data.result, winners: self.winners })
        } else if (current_data.winner) {
          self.addResult(winner)
        } else { }

        this.selected_move = self.SelectComponent.reset();
        this.is_finish = current_data.finish;
      })
  }

  private addResult(winner) {
    if (winner) {
      this.winners.push({
        round: this.match.getCurrentRound(),
        name: winner.name
      })
      this.winners_map[winner.name] = winner;
    }

  }

  





}