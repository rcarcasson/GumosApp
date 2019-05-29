import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'top3'
})
export class Top3Pipe implements PipeTransform {

  transform(ranking: number, clan: string): string {
    if (ranking === 1) {
      return 'warning';
    } else if ( ranking === 2 ) {
      return 'secondary';
    } else if ( ranking === 3 ) {
      return 'tertiary';
    } else if (clan === 'QU89QL') {
      return 'success';
    } else {
      return 'medium';
    }
  }

}
