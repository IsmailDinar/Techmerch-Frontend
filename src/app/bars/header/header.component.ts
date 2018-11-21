import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  numberOfTicks = 0;
  @Input() public nbrofItems = 0;
  constructor(private cookieService: CookieService, private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      this.ref.markForCheck();
    }, 1000);
  }
  ngOnInit() {
    if (this.cookieService.check('cart')) {
      const str = this.cookieService.get('cart');
      this.nbrofItems =   str.split(';').length;
    }
  }
  refresh() {
    this.ref.detectChanges();
  }
}
