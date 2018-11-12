import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CartModel } from '../models/cart-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  @Input() product: CartModel;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() amountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onAmountChange() {
    console.log('new amount', this.product.amount);
    this.amountChange.emit(this.product.amount);
  }
}
