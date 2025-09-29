import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products = [
    { id: 1, name: 'Laptop', price: 15000 },
    { id: 2, name: 'Mobile', price: 8000 },
    { id: 3, name: 'Headphones', price: 1200 }
  ];

  newName: string = '';
  newPrice: number = 0;

  addProduct() {
    if (!this.newName || this.newPrice <= 0) {
      alert('Please enter valid product details!');
      return;
    }

    const newId = this.products.length + 1;
    this.products.push({
      id: newId,
      name: this.newName,
      price: this.newPrice
    });

    this.newName = '';
    this.newPrice = 0;
  }
}
