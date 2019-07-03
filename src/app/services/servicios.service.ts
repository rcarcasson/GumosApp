import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoClan, SiguientesCofres } from '../interfaces/interface';

// tslint:disable-next-line: max-line-length
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUxNiwiaWRlbiI6IjQ2OTU0ODQyMjQ0MjEyMzI2NCIsIm1kIjp7fSwidHMiOjE1NTU0MjY1MzY1NzF9.BgfzC6GBMekbWKyosN8gygn_FQu5Be_tumXYOym3N8Q';
const url = 'https://api.royaleapi.com';
const clan = 'QU89QL';
const headers = new HttpHeaders({
  'Authorization' : `Bearer ${apiKey}`
});

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {


  constructor(private http: HttpClient) { }

  obtenerClan() {
    return this.http.get<InfoClan>(`${url}/clan/${clan}`, {headers});
  }

  obtenerCofres(tag: string) {
    return this.http.get<SiguientesCofres>(`${url}/player/${tag}/chests`, {headers});
  }

  warStats() {
    return this.http.get(`${url}/clan/${clan}/war`, {headers});
  }

  topClansCl() {
    return this.http.get(`${url}/top/clans/cl`, {headers});
  }

  playerStats(tag: string) {
    return this.http.get(`${url}/player/${tag}`, {headers});
  }

  warHistory() {
    return this.http.get(`${url}/clan/QU89QL/warlog`, {headers});
  }
}
