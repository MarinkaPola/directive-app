import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'purePipe',
  pure: true //данный фильтр будет срабатывать только если будет изменено входное значение - изменено примит
  //изменена ссылка на объект (Date, Array, Function...)
})
export class PurePipe implements PipeTransform {

  transform(value: any) {
    return value.firstName + '' + value.lastName;
  }

}


