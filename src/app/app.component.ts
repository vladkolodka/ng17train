import { Component } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(public cartService: CartService) {
  }

  isCartEmpty(): boolean {
    return !this.cartService.hasItems();
  }
}
