import { Product } from './../model/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if ( !products || !searchTerm) {
      return products;
    }

  return products.filter(product => product.productName.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }

}
