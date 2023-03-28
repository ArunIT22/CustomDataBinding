import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-comp-ref',
  templateUrl: './product-comp-ref.component.html',
  styleUrls: ['./product-comp-ref.component.css']
})
export class ProductCompRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct!: Product;

  products: Product[] = [
    { id: 1, name: 'Amazfit Watch', price: 5999, color: 'Black', inStock: 'Available' },
    { id: 2, name: 'Apple Watch', price: 45999, color: 'Blue', inStock: 'Available' },
    { id: 3, name: 'Boat Watch', price: 2999, color: 'Black', inStock: 'Not Available' },
    { id: 4, name: 'Dell Laptop', price: 65999, color: 'Grey', inStock: 'Available' },
    { id: 5, name: 'HP Laptop', price: 89999, color: 'Black', inStock: 'Not Available' },
    { id: 6, name: 'LG Monitor', price: 12499, color: 'Black', inStock: 'Available' },
    { id: 7, name: 'Samsung Monitor', price: 14499, color: 'Black', inStock: 'Available' },
    { id: 8, name: 'MacBook Air Laptop', price: 85499, color: 'Silver', inStock: 'Available' },
  ]

}
