import { ProductCategory } from './product-category.enum';
import { CommentModel } from '../comments/models/comment-model';

export class ProductModel {
  constructor(public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean,
    public comments: CommentModel[]) {
  }
}
