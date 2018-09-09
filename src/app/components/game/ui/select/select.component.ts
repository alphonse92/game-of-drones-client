import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Input() value: string = "";
  @Input() label: string = "";
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  private isOpen = false;
  private options: string[] = ["Rock", "Paper", "Scissors"]
  private option_default = this.options[0];
  private selected = this.option_default;
  private arrow = "select-arrow.svg";
  private input = "select-input.svg";

  ngOnInit() {
  }

  openOrCLose() {
    this.isOpen = !this.isOpen;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  select(option) {
    this.selected = option;
    this.close();
    this.onChange.emit(option)
  }
}
