import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cart-item-model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: BehaviorSubject<CartItemModel[]>;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getContents();
  }

  removeItem(event: MouseEvent, itemId: number) {
    event.preventDefault();
    this.cartService.removeItem(itemId);
  }
}
