import { Category } from 'src/app/model/category';
export interface SubCategory {
  subCategoryId: number;
  subCategoryName: String;
  mainCategory: Category;
}
