import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if(!search) return products;
    const what = search.toLowerCase()
    return products.filter(i => {
      const where = [i.title, i.description].join('').toLowerCase()
      return where.indexOf(what) !== -1
    })
  }

}
