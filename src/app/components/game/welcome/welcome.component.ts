import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  @Output() start: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }
  public start_game() {
    console.log("asdasd")
    this.start.emit();
  }


}
