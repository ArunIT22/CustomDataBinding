import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch-child',
  templateUrl: './stopwatch-child.component.html',
  styleUrls: ['./stopwatch-child.component.css']
})
export class StopwatchChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag: boolean = false;
  counter: number = 0;

  start = () => {
    this.flag = true;
    let interval = setInterval(() => {
      if (this.flag == false) {
        clearInterval(interval);
      }
      this.counter = this.counter + 1;
    }, 1000);
  }

  stop() {
    this.flag = false;
  }

}
