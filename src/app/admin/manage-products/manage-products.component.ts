import { SubCategory } from './../../model/sub-category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
  providers: [ProductService, CategoryService]
})
export class ManageProductsComponent implements OnInit, OnDestroy {
  public products: Product[];
  public subCategories: SubCategory[];
  public selectedProduct: Product;
  public aproduct = new Product();
  public uproduct = new Product();
  public s = '';
  private subscription$ = new Subscription();
  public isSubmitted = false;
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.subscription$.add(this.productService.getProducts().subscribe((products: Product[]) => {
    this.products = products;
    },
      (error) => {
        console.log(error);
      }
    ));
    this.subscription$.add(this.categoryService.getSubCategories().subscribe((subcategories: SubCategory[]) => {
      this.subCategories = subcategories.sort((a, b) => {
        if (b.subCategoryName > a.subCategoryName) {return -1; }
        if (b.subCategoryName < a.subCategoryName) {return 1; }
        return 0;
      });
    }));
  }
  addProduct() {
    this.aproduct.productCategory = this.aproduct.productSubCategory.mainCategory;
    console.log(this.aproduct);
    this.subscription$.add(this.productService.addProduct(this.aproduct).subscribe(data => console.log(data), error => console.log(error)));
  }
  updateProduct() {
    this.subscription$.add(this.productService.updateProduct(this.uproduct)
    .subscribe(data => console.log(data), error => console.log(error)));
    console.log(this.uproduct);
  }
  deleteProduct(productId: number) {
    this.subscription$.add(this.productService.deleteProduct(productId).subscribe(error => console.log(error)));
    const index = this.products.findIndex(product => product.productId === productId);
    this.products.splice(index, 1);
  }
  test(x: any) {
    console.log(x);
  }
  onSubmit() { this.isSubmitted = true; }
  setString(s: string) {
    this.s = s;
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
