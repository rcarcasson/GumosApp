import { Component, OnInit, Input } from '@angular/core';
import { InfoClan } from 'src/app/interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetallePage } from 'src/app/pages/detalle/detalle.page';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-lista-miembros',
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.scss'],
})
export class ListaMiembrosComponent implements OnInit {

  @Input() info: InfoClan[];
  constructor(private modalCtrl: ModalController, private servicio: ServiciosService) { }

  ngOnInit() {}

  async verDetalles(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetallePage,
      componentProps: {
        id
      }
    });
    modal.present();
  }

  imgArena(id: number) {
    return `https://royaleapi.github.io/cr-api-assets/arenas/arena${id}.png`;
  }

}
