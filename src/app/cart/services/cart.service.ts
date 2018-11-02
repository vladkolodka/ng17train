import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/models/iproduct';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartItemModel } from '../models/cart-item-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productIds: number[] = [];
  private subject: BehaviorSubject<CartItemModel[]> = new BehaviorSubject<CartItemModel[]>([]);
  constructor(public productService: ProductsService) { }

  put(product: IProduct) {
    this.productIds.push(product.id);

    this.update();
  }

  private update() {
    this.subject.next(
      this.productService.getProducts()
        .filter(p => this.productIds.includes(p.id))
        .map(p => new CartItemModel(p.id, p.name))
    );
  }

  hasItems(): boolean {
    return this.productIds.length !== 0;
  }

  getContents(): BehaviorSubject<CartItemModel[]> {
    this.update();

    return this.subject;
  }

  removeItem(itemId: number) {
    this.productIds = this.productIds.filter(id => id !== itemId);

    this.update();
  }
}
