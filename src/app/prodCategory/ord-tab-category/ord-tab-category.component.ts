
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';



@Component({
  selector: 'app-ord-tab-category',
  templateUrl: './ord-tab-category.component.html',
  styleUrls: ['./ord-tab-category.component.css'],
  providers: [ProductService]
})
export class OrdTabCategoryComponent implements OnInit {
  public products: Product[];
  public selectedProduct: Product;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {this.products = products;
      console.log(products);
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
