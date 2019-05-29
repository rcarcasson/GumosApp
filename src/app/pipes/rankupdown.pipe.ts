import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankupdown'
})
export class RankupdownPipe implements PipeTransform {

  transform(rank: number , anterior: number): string {
    if (rank === anterior) {
      return 'pause';
    } else if (rank > anterior) {
      return 'arrow-dropdown';
    } else if (rank < anterior) {
      return 'arrow-dropup';
    }
  }

}
