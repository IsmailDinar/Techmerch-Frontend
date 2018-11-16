import { Category } from './category';

export class Product {

  public productId: number;
  public productName: String;
    public productPrice: number;
    public productDescription: String;
    public productCategory: Category;
    public productImgurl: String;
    public productRate?: number;
  constructor() {
  }



}
