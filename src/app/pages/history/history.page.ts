import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSelect } from '@ionic/angular';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Member } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  @ViewChild(IonSelect) lista: IonSelect;
  historico: Historico[] = [];
  datos: Participant[] = [];
  miembros: Member[] = [];
  cargando = true;
  totalCartas = 0;
  totalVictorias = 0;
  porcentajeVictorias = 0;

  constructor(private modalCtrl: ModalController, private servicios: ServiciosService) { }

  ngOnInit() {
    this.cargarMiembros();
    this.obtenerHistorico();
    console.log(this.miembros);
    console.log(this.historico);
  }

  async cargarMiembros() {
    await this.servicios.obtenerClan().subscribe(resp => {
      this.miembros.push(...resp.members);
      this.cargando = false;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  mostrar() {
    console.log(this.lista.value);
    this.datos = [];
    this.totalCartas = 0;
    this.totalVictorias = 0;
    this.porcentajeVictorias = 0;
    for (let i = 0; i < this.historico.length; i++) {
      for (let a = 0; a < this.historico[i].participants.length; a++) {
        if (this.historico[i].participants[a].tag === this.lista.value) {
          this.datos.push(this.historico[i].participants[a]);
          this.totalVictorias = this.totalVictorias + this.historico[i].participants[a].wins;
          this.totalCartas = this.totalCartas + this.historico[i].participants[a].cardsEarned;
          this.porcentajeVictorias = (this.totalVictorias * 100) / 10;
        }
      }
    }
    console.log(this.datos);
  }

  async obtenerHistorico() {
    await this.servicios.warHistory().subscribe( (resp: Historico[]) => {
      this.historico.push(...resp);
    });
  }

}

interface Historico {
  createdDate: number;
  participants: Participant[];
  standings: Standing[];
  seasonNumber: number;
}

interface Standing {
  tag: string;
  name: string;
  participants: number;
  battlesPlayed: number;
  wins: number;
  crowns: number;
  warTrophies: number;
  warTrophiesChange: number;
  badge: Badge;
}

interface Badge {
  name: string;
  category: string;
  id: number;
  image: string;
}

interface Participant {
  tag?: string;
  name?: string;
  cardsEarned?: number;
  battlesPlayed?: number;
  wins?: number;
  collectionDayBattlesPlayed?: number;
  numberOfBattles?: number;
}
