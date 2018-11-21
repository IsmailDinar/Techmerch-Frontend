import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  public topRatedProducts: Product[] = [];
  public selectedProduct: Product;
  private _categoryId: number;
  private subuscription: Subscription;
  constructor(private productService: ProductService, private cartService: CartService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.subuscription = this._activatedRoute.params.subscribe(params => {
      this._categoryId = params['categoryId'];
      this.productService.getProductsByCategory(this._categoryId).subscribe((products: Product[]) => {
        this.products = products;
      },
        (error) => {
          console.log(error);
        },
        () => {
        this.topRatedProducts = this.products.sort((a, b) => {
          return b.productRate - a.productRate;
        });
        }
      );
    });
  }
  addToCart(product: Product, quantity: number) {
    this.cartService.addItem(product, quantity);
    this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
  }
  ngOnDestroy() {
    if (this.subuscription !== undefined) {
      this.subuscription.unsubscribe();
    }
  }
}
