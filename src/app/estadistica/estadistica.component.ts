import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { ResultObject } from '../interfaces/incidentes.interface';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})

export class EstadisticaComponent implements OnInit {

  @ViewChild('chart', { static: true }) chart: any;

  public dataInsidentes: ResultObject = {
    robo: 0,
    emergenciaMedica: 0,
    incendio: 0,
    desastreNatural: 0,
    accidenteDeTrafico: 0
  };

  public total: number = 0;

  public displayedColumns: string[] = ['item', 'cost'];
  public transactions: Transaction[] = [];

  constructor(private connectService: ConnectService) {
  }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos() {
    this.connectService.cargarTotalIncidentes().subscribe((res: any) => {

      this.dataInsidentes = res;

      this.total = this.dataInsidentes.robo + this.dataInsidentes.emergenciaMedica + this.dataInsidentes.incendio + this.dataInsidentes.desastreNatural + this.dataInsidentes.accidenteDeTrafico;

      this.transactions = [
        { item: 'Robos', cost: this.dataInsidentes.robo },
        { item: 'Emergencia Médica', cost: this.dataInsidentes.emergenciaMedica },
        { item: 'Incendios', cost: this.dataInsidentes.incendio },
        { item: 'Desastres Naturales', cost: this.dataInsidentes.desastreNatural },
        { item: 'Accidentes de Tráfico', cost: this.dataInsidentes.accidenteDeTrafico }
      ];
    });
  }

  getTotalCost(): number {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}