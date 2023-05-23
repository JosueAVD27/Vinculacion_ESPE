import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';


interface IncidenteData {
  año: number;
  mes: number;
  dia: number;
  incidente: string;
  total: number;
}

@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})
export class Grafico2Component implements OnInit {
  @ViewChild('chartContainer') chartContainer: any;

  chart: any;
  chartOptions: any;

  constructor(private connectService: ConnectService) { }

  ngOnInit() {
    this.chartOptions = {
      creditText: '',
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Incidentes Anuales"
      },
      axisX: {
        valueFormatString: "MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        },
        culture: "es"
      },
      axisY: {
        title: "Incidentes",
        crosshair: {
          enabled: true
        }
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "bottom",
        horizontalAlign: "right",
        dockInsidePlotArea: true,
        itemclick: (e: any) => {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          this.chart.render();
        }
      },
      data: []
    };
    this.loadData();
  }


  loadData() {
    this.connectService.cargarTotal().subscribe(
      (response: IncidenteData[]) => {
        const formattedData = this.formatChartData(response);
        this.chartOptions.data = formattedData;
      },
      (error) => {
        console.log('Error al obtener los datos', error);
      }
    );
  }

  formatChartData(data: IncidenteData[]) {
    const incidentesPorFecha: { [fecha: string]: { [tipoIncidente: string]: number } } = {};

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const fecha = `${item.año}-${item.mes}-${item.dia}`;

      if (!incidentesPorFecha[fecha]) {
        incidentesPorFecha[fecha] = {};
      }

      if (!incidentesPorFecha[fecha][item.incidente]) {
        incidentesPorFecha[fecha][item.incidente] = 0;
      }

      incidentesPorFecha[fecha][item.incidente] += item.total;
    }

    const seriesData: any[] = [];

    for (const fecha in incidentesPorFecha) {
      if (incidentesPorFecha.hasOwnProperty(fecha)) {
        const incidentes = incidentesPorFecha[fecha];

        const dataPoint: any = {
          x: new Date(fecha),
          y: 0
        };

        for (const tipoIncidente in incidentes) {
          if (incidentes.hasOwnProperty(tipoIncidente)) {
            dataPoint.y += incidentes[tipoIncidente];
          }
        }

        seriesData.push(dataPoint);
      }
    }

    const series = {
      type: "line",
      showInLegend: true,
      name: "Incidentes",
      lineDashType: "dash",
      markerType: "square",
      xValueFormatString: "DD MMM, YYYY",
      dataPoints: seriesData
    };

    return [series];
  }
}