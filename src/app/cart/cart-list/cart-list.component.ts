import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  totalPrice: Observable<number>;
  amount: Observable<number>;
  products: Observable<CartModel[]>;

  constructor(private cartService: CartService) {
    this.totalPrice = cartService.getTotalPrice();
    this.amount = cartService.getAmount();
    this.products = cartService.getProducts();
  }

  ngOnInit() {
  }

  onRemoveFromCart(id: number) {
    this.cartService.remove(id);
  }

  onAmountChange(amount: number, product: CartModel) {
    console.log(amount);

    this.cartService.setAmount(product.id, amount);
  }
}
