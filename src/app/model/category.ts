export class Category {
  private _categoryId: number;
  private _categoryName: String;

  constructor () {
    this._categoryId = 1;
    this._categoryName = 'ordnateurs';

  }
  public get categoryId(): number {
    return this._categoryId;
  }


  public get categoryName(): String {
    return this._categoryName;
  }


  public set categoryId(value: number) {
    this._categoryId = value;
  }


  public set categoryName(value: String) {
    this._categoryName = value;
  }



}
