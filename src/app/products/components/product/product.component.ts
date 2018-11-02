import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from '../../models/product-category.enum';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // name: string;
  // description: string;
  // price: number;
  // category: ProductCategory = ProductCategory.Games;
  // isAvaliable: boolean;
  // characteristics: string[] = ['1', '2', '3'];
  @Input() product: IProduct;
  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log(`Product '${name}' is buyed.`);
  }
}
