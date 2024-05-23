import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts('http://localhost:3000/clothes', { page: 1, perPage: 5 })
      .subscribe((products: Products) => {
        console.log(products.items);
      });
  }
}
