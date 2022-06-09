import { Pipe, PipeTransform } from '@angular/core';



  @Pipe({
    name: 'impurePipe',
    pure: false //данный фильтр будет срабатывать при каждой проверке изменений
  })
  export class ImpurePipe implements PipeTransform {

  transform(value: any) {
    return value.firstName + '' + value.lastName;
  }
}
