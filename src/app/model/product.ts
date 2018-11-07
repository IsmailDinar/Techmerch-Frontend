import { Category } from './category';

export interface Product {
  productName: String;
  productPrice: number;
  productId: number;
  productDescription: String;
  productCategory: Category;
  productImgurl: String;
}
