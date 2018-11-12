import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart-model';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/products/services/product.service';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartModel[] = [];
  private totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private amount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private productsInCart: BehaviorSubject<CartModel[]> = new BehaviorSubject<CartModel[]>([]);

  constructor(private productService: ProductService) { }

  add(product: ProductModel, amount: number) {
    const existingItem = this.items.find(i => i.id === product.id);

    if (existingItem) {
      existingItem.amount = amount;
    } else {
      this.items.push(new CartModel(product.id, amount, product.name));
    }

    this.update();
  }

  setAmount(id: number, amount: number) {
    const existingItem = this.items.find(i => i.id === id);

    if (!existingItem) { return; }

    existingItem.amount = amount;
    this.update();
  }

  remove(id: number) {
    this.items = this.items.filter(i => i.id !== id);

    this.update();
  }

  update() {
    const products = this.productService.getProducts();

    let price = 0;

    this.items.forEach(item => {
      const product = products.find(i => i.id === item.id);

      if (!product) { return; }

      price += product.price * item.amount;
    });

    this.productsInCart.next(this.items);
    this.amount.next(this.items.reduce((acc, item) => acc + item.amount, 0));
    this.totalPrice.next(price);
  }

  getTotalPrice(): Observable<number> {
    return this.totalPrice.asObservable();
  }

  getAmount() {
    return this.amount.asObservable();
  }

  getProducts() {
    return this.productsInCart.asObservable();
  }

}
