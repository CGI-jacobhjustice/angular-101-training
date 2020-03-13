import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'yes_no'})
export class YesNoPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? "Yes" : "No"
  }
}