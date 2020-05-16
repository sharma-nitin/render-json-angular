import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any): any {
    const text = value;
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

}
