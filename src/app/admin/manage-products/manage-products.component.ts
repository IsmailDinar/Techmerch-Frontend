import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
  providers: [ProductService, CategoryService]
})
export class ManageProductsComponent implements OnInit {
  public products: Product[];
  public categories: Category[];
  public selectedProduct: Product;
  public product = new Product();
  public isSubmitted = false;
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
    this.products = products;
    },
      (error) => {
        console.log(error);
      }
    );
    this.categoryService.getCategoeies().subscribe((categories: Category[]) => {
      this.categories = categories;
    },
      (error) => {
        console.log(error);
      }
    );
  }
  addProduct() {
    this.productService.addProduct(this.product).subscribe(data => console.log(data), error => console.log(error));
  }
  onSubmit() { this.isSubmitted = true; }

}
