import { IProduct } from './iproduct';
import { ProductCategory } from './product-category.enum';

export class ProductModel implements IProduct {
  constructor(public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean,
    public characteristics: string[]) {

    }
}
