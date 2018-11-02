import { ProductCategory } from './product-category.enum';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  characteristics: string[];
}
