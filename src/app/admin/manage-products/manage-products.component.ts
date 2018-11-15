import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
  providers: [ProductService]
})
export class ManageProductsComponent implements OnInit {
public products: Product[];
public selectedProduct: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {this.products = products;
      console.log(products);
    },
    (error) => {
      console.log(error);
    }
    );
  }
  addProduct() {
    const product: Product = new Product();
    product.setProductName('Pc');
    console.log(product);
    this.productService.addProduct(product).subscribe(data => console.log(data), error => console.log(error));
  }

}
