import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  public products: Product[] = [];
  public searchTerm: string;
  public clickedOutside = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  close() {
    this.clickedOutside = ! this.clickedOutside;
  }
}
