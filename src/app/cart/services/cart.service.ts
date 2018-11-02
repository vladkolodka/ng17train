import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/models/iproduct';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productIds: number[] = [];
  constructor(public productService: ProductsService) { }

  put(product: IProduct) {
    console.log('new item in cart', product.name);

    this.productIds.push(product.id);
  }

  getContents(): CartItemModel[] {
    return this.productService.getProducts()
      .filter(p => this.productIds.includes(p.id))
      .map(p => new CartItemModel(p.id, p.name));
  }

  removeItem(itemId: number) {
    this.productIds = this.productIds.filter(id => id !== itemId);
  }
}
