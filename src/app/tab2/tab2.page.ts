import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  warStats: any;
  esWar = false;
  cargando = true;
  evento = '';
  banner = '';
  termino = '';

  constructor (private servicios: ServiciosService, private alertController: AlertController) {}

  async ngOnInit() {
    await this.servicios.warStats().subscribe((resp: any) => {
      console.log(resp);
      if (resp.hasOwnProperty('warEndTime')) {
        console.log('Dia de Guerra');
        this.esWar = true;
        this.evento = 'war';
        this.banner = '../assets/banner_war.jpeg';
        const fechaTermino = moment(new Date(resp.warEndTime * 1000));
        // console.log('Dia de termino', moment(fechaTermino).fromNow());
        this.termino = moment(fechaTermino).fromNow();
      }

      if (resp.hasOwnProperty('collectionEndTime')) {
        this.evento = 'col';
        this.banner = '../assets/banner_col.jpeg';
        console.log('Dia de coleccion');
        const fechaTermino = moment(new Date(resp.collectionEndTime * 1000));
        // console.log('Dia de termino', moment(fechaTermino).fromNow());
        this.termino = moment(fechaTermino).fromNow();
      }
      this.warStats = resp;
      this.cargando = false;
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

  async doRefresh(event) {
    await this.servicios.warStats().subscribe((resp: any) => {
      console.log(resp);
      if (resp.hasOwnProperty('warEndTime')) {
        console.log('Dia de Guerra');
        this.esWar = true;
        this.evento = 'guerra';
        const fechaTermino = moment(new Date(resp.warEndTime * 1000));
        // console.log('Dia de termino', moment(fechaTermino).fromNow());
        this.termino = moment(fechaTermino).fromNow();

      }

      if (resp.hasOwnProperty('collectionEndTime')) {
        this.evento = 'coleccion';
        console.log('Dia de coleccion');
        const fechaTermino = moment(new Date(resp.collectionEndTime * 1000));
        // console.log('Dia de termino', moment(fechaTermino).fromNow());
        this.termino = moment(fechaTermino).fromNow();
      }
      this.warStats = resp;
      this.cargando = false;
      event.target.complete();
    }, ((err: any) => {
      this.mostrarAlerta(err);
    }));

  }
}
