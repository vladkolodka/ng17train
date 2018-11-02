import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cart-item-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  // TODO convert to observable
  getItems(): CartItemModel[] {
    return this.cartService.getContents();
  }

  removeItem(event: MouseEvent, itemId: number) {
    event.preventDefault();
    this.cartService.removeItem(itemId);
  }
}
