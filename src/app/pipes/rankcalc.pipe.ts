import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankcalc'
})
export class RankcalcPipe implements PipeTransform {

  transform(previousrank: number , rank: number): number {
    if (rank === previousrank) {
      return 0;
    } else if (rank > previousrank) {
      return rank - previousrank;
    } else if (rank < previousrank) {
      return previousrank - rank;
    }
  }

}
