import { SubCategory } from './sub-category';
import { Category } from './category';

export class Product {

  public productId: number;
  public productName: String;
  public productPrice: number;
  public productDescription: String;
  public productCategory: Category;
  public productImgurl: String;
  public productRate = 0;
  public productAvailability = true;
  public productSubCategory: SubCategory;
  public productDiscount = 0;
  constructor() {
  }



}
