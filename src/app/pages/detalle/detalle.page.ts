import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Member } from 'src/app/interfaces/interface';
import { ServiciosService } from 'src/app/services/servicios.service';
import { SiguientesCofres } from '../../interfaces/interface';
import { PlayerStats } from 'src/app/interfaces/playerStats';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  @Input() id: Member;
  @ViewChild('partidas') partidas;
  @ViewChild('liga') liga;

  barChart: any;
  radarChart: any;

  gumosStats: PlayerStats[] = [];
  cofres: SiguientesCofres[] = [];
  topCofres: [];
  cargandoCofres = true;
  cargandoStats = true;

  slideOpts = {
    slidesPerView: 4.3,
    freeMode: true,
    zoom: {
      toggle: false
    }
  };

  slideOpts2 = {
    slidesPerView: 2.3,
    freeMode: true,
    zoom: {
      toggle: false
    }
  };

  constructor(private modalCtrl: ModalController, private servicio: ServiciosService) {
   }

   graficoPartidas() {
    this.barChart = new Chart(this.partidas.nativeElement, {

      type: 'pie',
      data: {
          labels: ['Victorias', 'Perdidas', 'Empates'],
          datasets: [{
              data: [this.gumosStats[0].games.wins, this.gumosStats[0].games.losses, this.gumosStats[0].games.draws],
              backgroundColor: [
                  'rgba(69, 200, 60, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(69,200,60,1)',
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }]
      }
   });
  }

  cargarBestAnterior(): number {
    if ( this.gumosStats[0].leagueStatistics && this.gumosStats[0].leagueStatistics.previousSeason) {
      return this.gumosStats[0].leagueStatistics.previousSeason.bestTrophies;
    } else {
      return 0;
    }
  }
  cargarTotalAnterior(): number {
    if ( this.gumosStats[0].leagueStatistics && this.gumosStats[0].leagueStatistics.previousSeason) {
      return this.gumosStats[0].leagueStatistics.previousSeason.trophies;
    } else {
      return 0;
    }
  }
  cargarTotalActual(): number {
    if ( this.gumosStats[0].leagueStatistics && this.gumosStats[0].leagueStatistics.currentSeason) {
      return this.gumosStats[0].leagueStatistics.currentSeason.trophies;
    } else {
      return 0;
    }
  }
  cargarMejorActual(): number {
    if ( this.gumosStats[0].leagueStatistics && this.gumosStats[0].leagueStatistics.currentSeason) {
      return this.gumosStats[0].leagueStatistics.currentSeason.bestTrophies;
    } else {
      return 0;
    }
  }
  cargarMejorTemp(): number {
    if ( this.gumosStats[0].leagueStatistics && this.gumosStats[0].leagueStatistics.bestSeason) {
      return this.gumosStats[0].leagueStatistics.bestSeason.trophies;
    } else {
      return 0;
    }
  }

  graficoLigas() {
    this.radarChart = new Chart(this.liga.nativeElement, {

      type: 'line',
      data: {
          labels: ['Mejor Actual', 'Actual', 'Mejor Anterior', 'Anterior', 'Mejor'],
          datasets: [{
            label: 'Coronas de Liga',
            data: [this.cargarMejorActual(),
              this.cargarTotalActual(),
              this.cargarBestAnterior(),
              this.cargarTotalAnterior(),
              this.cargarMejorTemp()],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)'
          }]
      }
   });
  }

  async ngOnInit() {

    await this.obtenerCofres();
    await this.playerStats();
  }

  async playerStats() {
    await this.servicio.playerStats(this.id.tag).subscribe((resp: PlayerStats) => {
      this.gumosStats.push(resp);
      this.cargandoStats = false;
      // console.log('Stats', this.gumosStats);
      this.graficoPartidas();
      this.graficoLigas();
    });
  }

  async obtenerCofres() {
    await this.servicio.obtenerCofres(this.id.tag).subscribe((resp: SiguientesCofres) => {
      this.cofres.push(resp);
      // console.log('Cofres', this.cofres);
      this.cargandoCofres = false;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  imgArena(id: number) {
    return `https://royaleapi.github.io/cr-api-assets/arenas/arena${id}.png`;
  }


}
