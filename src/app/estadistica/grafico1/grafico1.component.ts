import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { ResultObject } from '../../interfaces/incidentes.interface';


@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})

export class Grafico1Component implements OnInit {

  @ViewChild('chart', { static: true }) chart: any;

  public dataInsidentes: ResultObject = {
    robo: 0,
    emergenciaMedica: 0,
    incendio: 0,
    desastreNatural: 0,
    accidenteDeTrafico: 0
  };

  public total: number = 0;
  public roboRes: number = 0;
  public emergenciaRes: number = 0;
  public incendioRes: number = 0;
  public desastreRes: number = 0;
  public accidenteRes: number = 0;

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos() {
    this.connectService.cargarTotalIncidentes().subscribe((res: any) => {

      this.dataInsidentes = res;

      this.total = this.dataInsidentes.robo + this.dataInsidentes.emergenciaMedica + this.dataInsidentes.incendio + this.dataInsidentes.desastreNatural + this.dataInsidentes.accidenteDeTrafico;

      this.roboRes = (this.dataInsidentes.robo / this.total) * 100;
      this.emergenciaRes = (this.dataInsidentes.emergenciaMedica / this.total) * 100;
      this.incendioRes = (this.dataInsidentes.incendio / this.total) * 100;
      this.desastreRes = (this.dataInsidentes.desastreNatural / this.total) * 100;
      this.accidenteRes = (this.dataInsidentes.accidenteDeTrafico / this.total) * 100;

      this.chartOptions = {
        animationEnabled: true,
        title: {
          text: "Incidentes"
        },
        data: [{
          type: "doughnut",
          yValueFormatString: "#,###.##'%'",
          indexLabel: "{name}",
          dataPoints: [
            { y: this.roboRes, name: "Robo" },
            { y: this.emergenciaRes, name: "Emergencia Médica" },
            { y: this.incendioRes, name: "Incendios" },
            { y: this.desastreRes, name: "Desastres Naturales" },
            { y: this.accidenteRes, name: "Accidente de Tráfico" }
          ]
        }]

      };
    });
  }

  chartOptions = {};
}