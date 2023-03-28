import { StopwatchChildComponent } from './../stopwatch-child/stopwatch-child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stopwatch-parent',
  templateUrl: './stopwatch-parent.component.html',
  styleUrls: ['./stopwatch-parent.component.css']
})
export class StopwatchParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //ViewChild using Component - Share from child to parent
  @ViewChild(StopwatchChildComponent) stopWatchChild!: StopwatchChildComponent;

  startWatch() {
    this.stopWatchChild.start();
  }

  stopWatch() {
    this.stopWatchChild.stop();
  }
}
