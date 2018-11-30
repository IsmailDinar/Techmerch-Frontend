import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Input} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nbrofItems = 0;
  public categories: Category[];
  constructor(private cartService: CartService, private categoryService: CategoryService) {}
  ngOnInit() {
    this.categoryService.getCategoeies().subscribe((categories: Category[]) => {this.categories = categories;
    },
    (error) => {
      console.log(error);
    }
    );
    this.nbrofItems = this.cartService.getNumberOfItems();
    this.cartService.numberOfItems$.subscribe(nbr => this.nbrofItems = nbr);
  }

}
