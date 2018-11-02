import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductModel } from '../models/product-model';
import { ProductCategory } from '../models/product-category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    return [
      new ProductModel('Item 1', 'Do smth', 5, ProductCategory.Items, true, ['consists of several parts', '...', '123']),
      new ProductModel('RDR2', 'RDR2 game', 15, ProductCategory.Games, true, ['ps only', '...']),
      new ProductModel('Film', 'Fome film', 2, ProductCategory.Discs, false, ['old film', '...']),
    ];
  }
}
