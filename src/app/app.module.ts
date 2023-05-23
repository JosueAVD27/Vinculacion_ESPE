import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { ChartModule } from 'primeng/chart';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';;

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { Grafico1Component } from './estadistica/grafico1/grafico1.component';
import { Grafico2Component } from './estadistica/grafico2/grafico2.component';

import * as CanvasJSAngularChart from '../assets/canvas/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ComunidadComponent,
    EstadisticaComponent,
    ContactoComponent,
    NosotrosComponent,
    Grafico1Component,
    Grafico2Component,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    IonicModule,
    FormsModule,
    MatTableModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
