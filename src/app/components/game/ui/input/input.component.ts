import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  constructor() {
  }

  public ngOnInit() {
  }

  public onChange(val) {
    val = val.target.value;
    console.log(val)
    this.valueChange.emit(val);
  }

}
