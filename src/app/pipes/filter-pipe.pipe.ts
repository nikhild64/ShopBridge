import { Pipe, PipeTransform } from '@angular/core';
import { Iitem } from '../interfaces/interfaces';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Iitem[], filterValue: string): Iitem[] {
    // When there is input search value it should filter
    if (filterValue) {
      return value.filter((item) => {
        return item.name.toLowerCase().includes(filterValue.toLowerCase());
      });
    }
    return value;
  }
}
