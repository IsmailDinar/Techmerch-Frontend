import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Input} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nbrofItems = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.numberOfItems$.subscribe(nbr => this.nbrofItems = nbr);
  }

}
