import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cofreImagen'
})
export class CofrePipe implements PipeTransform {
  ruta: string;
  transform(tipo: string): string {
    if (tipo === 'silver') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-silver.png';
    }
    if (tipo === 'gold') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-golden.png';
    }
    if (tipo === 'giant') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-giant.png';
    }
    if (tipo === 'epic') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-epic.png';
    }
    if (tipo === 'legendary') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-legendary.png';
    }
    if (tipo === 'magical') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-magical.png';
    }
    if (tipo === 'megaLightning') {
      this.ruta = 'https://royaleapi.com/static/img/chests/chest-megalightning.png';
    }

    return this.ruta;
  }

}
