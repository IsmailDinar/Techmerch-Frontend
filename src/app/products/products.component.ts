import { SubCategory } from './../model/sub-category';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  public isActive: number;
  public subCategories: SubCategory[];
  public topRatedProducts: Product[] = [];
  public selectedProduct: Product;
  private _categoryId: number;
  private subuscription$ = new Subscription();
  private productSubuscription$ = new  Subscription();
  constructor(private productService: ProductService, private categoryService: CategoryService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.subuscription$ = this._activatedRoute.params.subscribe(params => {
      this._categoryId = params['categoryId'];
      this.productService.getProductsByCategory(this._categoryId).subscribe((products: Product[]) => {
        this.products = products;
        this.topRatedProducts = this.products.sort((a, b) => {
          return b.productRate - a.productRate;
        });
      },
        (error) => {
          console.log(error);
        },
      );
      this.categoryService.getSubCategoriesByCategory(this._categoryId).subscribe((subCategories: SubCategory[]) => {
        this.subCategories = subCategories;
      });
    });
  }
  getProductsBySubCategory(subcategoryId: number) {
    this.productSubuscription$.add(this.productService.getProductsBySubCategory(subcategoryId).subscribe((products: Product[]) => {
      this.products = products;
      this.topRatedProducts = this.products.sort((a, b) => {
        return b.productRate - a.productRate;
      });
    }));
  }
  ngOnDestroy() {
      this.productSubuscription$.unsubscribe();
      this.subuscription$.unsubscribe();
  }
}
