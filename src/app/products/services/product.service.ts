import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductCategory } from '../models/product-category.enum';
import { CommentModel } from '../comments/models/comment-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel(0, 'Product 1', 'Description 1', 1, ProductCategory.Monitors, true, [
        new CommentModel('User 1', 'Comment 1'),
        new CommentModel('User 2', 'Comment 2'),
        new CommentModel('User 3', 'Comment 3')
      ]),
      new ProductModel(1, 'Product 2', 'Description 2', 2, ProductCategory.Keyboards, false, [
        new CommentModel('User 4', 'Comment 1'),
        new CommentModel('User 5', 'Comment 2'),
        new CommentModel('User 6', 'Comment 3')
      ]),
      new ProductModel(2, 'Product 3', 'Description 3', 3, ProductCategory.Phones, true, [
        new CommentModel('User 7', 'Comment 1'),
        new CommentModel('User 8', 'Comment 2')
      ]),
      new ProductModel(3, 'Product 4', 'Description 4', 4, ProductCategory.Keyboards, true, [
        new CommentModel('User 10', 'Comment 1'),
        new CommentModel('User 11', 'Comment 2'),
        new CommentModel('User 12', 'Comment 3')
      ]),
      new ProductModel(4, 'Product 5', 'Description 5', 5, ProductCategory.Headphones, false, [
        new CommentModel('User 13', 'Comment 1'),
        new CommentModel('User 14', 'Comment 2'),
        new CommentModel('User 15', 'Comment 3')
      ]),
      new ProductModel(5, 'Product 6', 'Description 6', 6, ProductCategory.Speakers, true, [
        new CommentModel('User 16', 'Comment 1'),
        new CommentModel('User 17', 'Comment 2')
      ]),
    ];
  }
}
