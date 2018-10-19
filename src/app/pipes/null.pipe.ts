import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'null',
  pure: true
})
export class NullPipe implements PipeTransform {

  transform(value: any, a?: any, b?: any): any {
    if(value) return value;
    return a;
  }

}
