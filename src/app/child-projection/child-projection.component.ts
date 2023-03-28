import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-projection',
  templateUrl: './child-projection.component.html',
  styleUrls: ['./child-projection.component.css']
})
export class ChildProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //message: string = "Content Projection Demo";

  @Input() message: string = '';
}
