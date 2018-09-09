import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.sass']
})
export class MatchSummaryComponent implements OnInit {

  constructor() { }
  @Input() summary;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  private show_emperor: boolean = false;
  private emperor_btn_lbl = "Continue"
  private play_btn_lbl = "Play Again"

  ngOnInit() {
    console.log("init summary window", this.summary);
    if (this.summary)
      this.show_emperor = this.summary.result.emperor;
  }

  closeEmperorView() {
    this.show_emperor = false;

  }

  close() {
    this.onClose.emit();
    this.summary = null;
  }

  public setSummary(summary) {
    this.summary = summary;
    this.show_emperor = this.summary.result.emperor
    console.log(this.summary)
  }



}
