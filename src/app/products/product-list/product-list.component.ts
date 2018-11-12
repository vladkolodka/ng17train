import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  onBuyProduct(amount: number, product: ProductModel) {
    console.log(product, amount);
    this.cartService.add(product, amount);
  }
}
