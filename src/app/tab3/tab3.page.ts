import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { TopClanes } from '../interfaces/topclans';
import { IonInfiniteScroll, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  topClanes: TopClanes[] = [];
  mostrarClanes: TopClanes[] = [];
  gumos: TopClanes[] = [];
  aCargar = 0;
  cargando = true;

  constructor (private servicios: ServiciosService, private alertController: AlertController) { }

  async ngOnInit() {
    await this.servicios.topClansCl().subscribe((resp: TopClanes[]) => {
      this.topClanes.push(...resp);
      this.cargando = false;
      this.mostrarClanes.push(...this.topClanes.slice(this.aCargar, this.aCargar + 100));
      this.aCargar = this.aCargar + 100;
      this.gumos.push(this.topClanes.find(x => x.tag === 'QU89QL'));
    }, ((err: any) => {
      this.mostrarAlerta(err);
    }));

  }

  async mostrarAlerta(err) {
    let message = '';
    if (err.error.status === 503) {
      message = 'Al parecer kh4rus saturó los servidores con sus dildos anales por lo que hay' +
      ' problemas de conexión. Vuelvan a intentarlo más tarde.';
    }
    const alert = await this.alertController.create({
      header: 'Whops!!',
      subHeader: 'Error ' + err.error.status,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  doRefresh(event) {

  }

  cargarSiguientes(event) {

    setTimeout(() => {
      if (this.aCargar > 1000 ) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      this.mostrarClanes.push(...this.topClanes.slice(this.aCargar, this.aCargar + 100));
      this.aCargar = this.aCargar + 100;
      event.target.complete();
    }, 1000);
  }
}
