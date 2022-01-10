import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'bone': return 'attach_money';
      case 'chapeu': return 'code';

    }

    return 'code';
  }

}
