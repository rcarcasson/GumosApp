import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { InfoClan } from '../interfaces/interface';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  infoClan: InfoClan[] = [];
  cargando = true;
  msjCargando = '';

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private servicio: ServiciosService, private modalCtrl: ModalController,
              private alertController: AlertController) {}

  async ngOnInit() {
    await this.servicio.obtenerClan().subscribe((resp: InfoClan) => {
      this.infoClan.push(resp);
      this.cargando = false;
    }, ((err: any) => {
      console.log('Error de HTTP', err);
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

  async doRefresh(event) {
    await this.servicio.obtenerClan().subscribe(resp => {
      this.infoClan = [];
      this.infoClan.push(resp);
      event.target.complete();
    }, ((err: any) => {
      console.log('Error de HTTP', err);
    }));

  }

  recibido() {
    console.log('Recibido');
  }

}
