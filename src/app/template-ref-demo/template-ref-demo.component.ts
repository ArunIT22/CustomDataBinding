import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-demo',
  templateUrl: './template-ref-demo.component.html',
  styleUrls: ['./template-ref-demo.component.css']
})
export class TemplateRefDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(eventData: HTMLInputElement) {
    console.log(eventData);
    console.log(eventData.value);
  }
}
