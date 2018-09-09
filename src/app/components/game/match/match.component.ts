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
  @Output() onFinish: EventEmitter<Match> = new EventEmitter<Match>();
  @ViewChild('select') SelectComponent: SelectComponent;

  private label_select = "Select Move";
  private button_label = "Ok"
  private selected_move = null;

  private current_round;
  private current_player;

  private winners = [];
  private winners_map = {};
  ngOnInit() {
    console.log(this.match)
    this.current_round = this.match.getCurrentRoundInstance();
    this.selected_move = this.SelectComponent.getCurrent();
  }

  onMoveSelected(value) {
    console.log("onMoveSelected", value)
    this.selected_move = value;
  }

  move() {
    console.log("move")
    if (!this.selected_move)
      return console.error("No se ha seleccionado ningún movimiento");
    console.log("--- move selected ", this.selected_move);
    let self = this;
    this.match
      .move(this.selected_move)
      .then(current_data => {
        console.log("---", current_data)

        self.current_round = current_data.current_round;
        self.current_player = current_data.current_player;
        let winner = current_data.winner
        if (current_data.tie) {
          alert("Ronda Empatada");
        } else if (current_data.finish) {
          alert("el juego ha terminado");
          self.addResult(winner)

        } else if (current_data.winner) {
          alert("Ganador de la ronda actual " + winner.name);
          self.addResult(winner)
        } else {
        }
        this.selected_move = self.SelectComponent.reset();

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