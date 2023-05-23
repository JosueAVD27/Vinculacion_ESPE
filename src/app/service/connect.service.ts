import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environmen';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})

export class ConnectService {

  constructor(private http: HttpClient) {
  }

  cargarTotalIncidentes() {
    const url = `${base_url}/grafica/incidentes`;
    return this.http.get<any>(url);
  }

  cargarTotal() {
    const url = `${base_url}/grafica/totalData`;
    return this.http.get<any>(url);
  }
  
}
