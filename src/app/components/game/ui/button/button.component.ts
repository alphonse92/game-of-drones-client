import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  private emiting = 0;
  constructor() { }
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
  }
  public onClick($event) {
    this.clicked.emit($event);
  }
}
