import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Top3Pipe } from '../pipes/top3.pipe';
import { RankupdownPipe } from '../pipes/rankupdown.pipe';
import { RankcalcPipe } from '../pipes/rankcalc.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, Top3Pipe, RankupdownPipe, RankcalcPipe]
})
export class Tab3PageModule {}
