import { Category } from './category';

export class Product {

   productName: String;
   productPrice: number;
   productId: number;
   productDescription: String;
   productCategory: Category;
   productImgurl: String;
  constructor() {
  }
  public setProductName(value: String) {
    this.productName = value;
  }



}
