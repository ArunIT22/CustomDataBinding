import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchedText: string = '';

  @Output() searchedTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onChange() {
    this.searchedTextChanged.emit(this.searchedText);
  }

}
