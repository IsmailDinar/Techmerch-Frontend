import { User } from './../../model/user';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
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
  public user: User;
  constructor(private cartService: CartService, private categoryService: CategoryService, private authService: AuthService) {
  }
  ngOnInit() {
    this.categoryService.getCategoeies().subscribe((categories: Category[]) => {this.categories = categories;
    },
    (error) => {
      console.log(error);
    }
    );
    this.authService.getUser().subscribe(user => this.user = user);
    this.nbrofItems = this.cartService.getNumberOfItems();
    this.cartService.numberOfItems$.subscribe(nbr => this.nbrofItems = nbr);
  }
  logout() {
    this.authService.logout();
  }
}
