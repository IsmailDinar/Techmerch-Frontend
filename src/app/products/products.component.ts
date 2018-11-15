import { Component, OnInit, OnDestroy} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[];
  public selectedProduct: Product;
  private _categoryId: number;
  private subuscription: Subscription;
  constructor(private productService: ProductService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.subuscription = this._activatedRoute.params.subscribe(params => {
      this._categoryId = params['categoryId'];
      this.productService.getProductsByCategory(this._categoryId).subscribe((products: Product[]) => {
        this.products = products;
          console.log(products);
        },
          (error) => {
            console.log(error);
          }
        );
    });

  }
  ngOnDestroy() {
    if (this.subuscription !== undefined) {
      this.subuscription.unsubscribe();
    }
  }
}
