export class Category {
  private _categoryId: number;
  private _categoryName: String;
  private _isSubCategory: number;


  public get categoryId(): number {
    return this._categoryId;
  }


  public get categoryName(): String {
    return this._categoryName;
  }
  public get isSubCategory(): number {
    return this._isSubCategory;
  }


  public set categoryId(value: number) {
    this._categoryId = value;
  }


  public set categoryName(value: String) {
    this._categoryName = value;
  }
  public set isSubCategory(value: number) {
    this._isSubCategory = value;
  }



}
