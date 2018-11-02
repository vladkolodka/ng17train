import { ProductCategory } from './product-category.enum';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  characteristics: string[];
}
