import { SubCategory } from './../model/sub-category';
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy, AfterViewChecked {

  public products: Product[] = [];
  public auxproducts: Product[] = [];
  public isActive: number;
  public subCategories: SubCategory[];
  public topRatedProducts: Product[] = [];
  public selectedProduct: Product;
  private _categoryId: number;
  private subuscription$ = new Subscription();
  private productSubuscription$ = new  Subscription();
  public minValue = 0;
  public maxValue = 10000;
  public options: Options = {
    floor: 0,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };
  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductService, private categoryService: CategoryService, private _activatedRoute: ActivatedRoute, private cdRef: ChangeDetectorRef) { }
  ngOnInit() {
    this.subuscription$ = this._activatedRoute.params.subscribe(params => {
      this._categoryId = params['categoryId'];
      this.initialiseState();
      this.categoryService.getSubCategoriesByCategory(this._categoryId).subscribe((subCategories: SubCategory[]) => {
        this.subCategories = subCategories;
      });
    });

  }
  ngAfterViewChecked() {
    this.products = this.products.filter(item => item.productPrice >= this.minValue && item.productPrice <= this.maxValue);
    this.cdRef.detectChanges();
  }
  initialiseState() {
    this.productService.getProductsByCategory(this._categoryId).subscribe((products: Product[]) => {
      this.auxproducts = [...products].sort((a, b) => {

        return (a.productPrice * (1 - (a.productDiscount / 100))) - (b.productPrice * (1 - (b.productDiscount / 100)));

      });
      this.products = [...products].sort((a, b) => {

        return (a.productPrice * (1 - (a.productDiscount / 100))) - (b.productPrice * (1 - (b.productDiscount / 100)));

      });
      this.topRatedProducts = products.sort((a, b) => {
        return b.productRate - a.productRate;
      });
    },
      (error) => {
        console.log(error);
      },
    );
  }
  getProductsBySubCategory(subcategoryId: number) {
    this.productSubuscription$.add(this.productService.getProductsBySubCategory(subcategoryId).subscribe((products: Product[]) => {
      this.products = products;
      this.topRatedProducts = this.products.sort((a, b) => {
        return b.productRate - a.productRate;
      });
    }));
  }
  setDiscount(product: Product): number {
    return Math.round(product.productPrice * (1 - (product.productDiscount / 100)));
  }
  sortByName(s: string) {
    if (s === 'asc') {
      this.products = [...this.products].sort( (a, b) => {
        if (b.productName > a.productName) {return -1; }
        if (b.productName < a.productName) {return 1; }
        return 0;
      });
    } else if ( s === 'desc') {
      this.products = [...this.products].sort( (a, b) => {
        if (b.productName < a.productName) {return -1; }
        if (b.productName > a.productName) {return 1; }
        return 0;
      });
    }
  }
  sortByPrice(s: string) {
    if (s === 'desc') {
     this.products =  [...this.products].sort( (a, b) => {
       return ((a.productPrice * (1 - (a.productDiscount / 100))) - (b.productPrice * (1 - (b.productDiscount / 100))));
      });
    } else if ( s === 'asc') {
      this.products =  [...this.products].sort( (a, b) => {
        return ((b.productPrice * (1 - (b.productDiscount / 100))) - (a.productPrice * (1 - (a.productDiscount / 100))));
      });
    }

  }
  restAll() {
    this.minValue = 0;
    this.maxValue = 10000;
    this.products = this.auxproducts;
  }
  ngOnDestroy() {
      this.productSubuscription$.unsubscribe();
      this.subuscription$.unsubscribe();
  }
}
