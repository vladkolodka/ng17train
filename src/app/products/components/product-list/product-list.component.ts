import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/iproduct';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[];

  constructor(public productsService: ProductsService, public cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyed(product: IProduct) {
    this.cartService.put(product);
  }

}
