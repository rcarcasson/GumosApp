import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMiembrosComponent } from './lista-miembros/lista-miembros.component';
import { IonicModule } from '@ionic/angular';
import { DetallePage } from '../pages/detalle/detalle.page';
import { CofrePipe } from '../pipes/cofre.pipe';

@NgModule({
  declarations: [ListaMiembrosComponent, DetallePage, CofrePipe],
  entryComponents: [DetallePage],
  exports: [
    ListaMiembrosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
