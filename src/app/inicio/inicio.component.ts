/// <reference types="leaflet" />

import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.heat';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent /*implements OnInit */{
 /* private map: any;

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {

    const heatmapData = [
      [-0.40342836924386916, -79.30133490563477, 1.0],
      [-0.40705404362132924, -79.30396419056629, 1.0],
      [-0.4055465740244699, -79.29926176740575, 1.0]
    ];

    const formattedData = heatmapData.map((item) => {
      return L.latLng(item[0], item[1], item[2]);
    });

    this.map = L.map('map').setView([-0.4054149576647461, -79.30265933090757], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(this.map);

    L.heatLayer(formattedData, {
      radius: 25,
      blur: 25,
      maxZoom: 1,
    }).addTo(this.map);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const marker = L.marker([lat, lng]).addTo(this.map);
      });
    }
  }*/
}
