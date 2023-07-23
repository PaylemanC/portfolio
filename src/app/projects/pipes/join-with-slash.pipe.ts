import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinWithSlash'
})
export class JoinWithSlashPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.map(item => item.toUpperCase()).join(' // ');
  }
}
