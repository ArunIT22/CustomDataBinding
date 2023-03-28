import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('state') stateName!: ElementRef;
  @ViewChild('city') cityName!: ElementRef;

  onChange() {
    // console.log(this.stateName);
    // console.log(this.cityName);
    let selectedState: string = this.stateName?.nativeElement.value;
    // console.log(selectedState);

    if (selectedState == 'Tamil Nadu') {
      this.cityName.nativeElement.value = "Chennai";
    }
    else if (selectedState == 'Kerala') {
      this.cityName.nativeElement.value = "Trivandrum";
    }
  }

}
