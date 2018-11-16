
import { Category } from './../../model/category';

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.css'],
  providers: [CategoryService]
})
export class CategoriesBarComponent implements OnInit {

  public categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoeies().subscribe((categories: Category[]) => {this.categories = categories;
    },
    (error) => {
      console.log(error);
    }
    );

  }
}
