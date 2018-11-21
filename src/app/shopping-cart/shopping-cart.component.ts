import { Product } from 'src/app/model/product';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[] = [];
  public isEmpty = true;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    if (this.cartService.getNumberOfItems() !== 0 ) {
      this.products = this.cartService.getItems();
      this.isEmpty = false;
    }
  }
  removeItem(product: Product) {
    this.cartService.removeItem(product);
    this.cartService.updateNumberOfItems(this.cartService.getNumberOfItems());
    if (this.cartService.getNumberOfItems() === 0)  {
      this.isEmpty = true;
    }
  }

}
