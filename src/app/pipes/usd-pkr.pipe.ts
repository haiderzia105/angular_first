import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdPkr'
})
export class UsdPkrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {

    const [x] = args;
    return value*x;
  }

}
