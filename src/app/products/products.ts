import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  Products: Product[] = [
    { name: 'Notebook', price: 45, image: '7325.jpg', stock: 10 },
    { name: 'Ballpen (Blue)', price: 12, image: '7922_6619.jpg', stock: 20 },
    { name: 'Pencil', price: 8, image: 'images.png', stock: 15 },
    { name: 'Eraser', price: 5, image: 'images.jpg', stock: 0 },
    { name: 'Sharpener', price: 10, image: 'Sharpener-2-hole-Plastic-Assorted.jpg', stock: 8 },
    { name: 'Ruler (12 inch)', price: 20, image: 'images (1).jpg', stock: 6 },
    { name: 'Crayons (12 colors)', price: 65, image: 'images (2).jpg', stock: 4 },
    { name: 'Backpack', price: 899, image: '64d1d0ee5084ed073949cd2e-jansport-superbreak-backpack-black.jpg', stock: 3 },
    { name: 'Bond Paper (Ream)', price: 250, image: 'images (3).jpg', stock: 7 },
    { name: 'Highlighter Set', price: 120, image: 'images (4).jpg', stock: 0 }
  ];

  Addtocart(item: Product) {
    if (item.stock > 0) {
      item.stock--;
      console.log(`${item.name} added to cart`);
    }
  }
}