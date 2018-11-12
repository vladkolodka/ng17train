import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(public productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  onBuyProduct(amount: number, product: ProductModel) {
    console.log(product, amount);
  }
}
