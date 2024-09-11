import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delete',
  standalone: true
})
export class DeletePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
