import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() buy: EventEmitter<number> = new EventEmitter<number>();

  headerClasses = {};
  amount = 1;

  constructor() { }

  ngOnInit() {
    this.headerClasses = {
      'header-avaliable': this.product.isAvailable,
      'header-unavaliable': !this.product.isAvailable
    };
  }

  onBuy() {
    this.buy.emit(this.amount);
  }

  addAmount(count: number) {
    this.amount += count;
  }

}
