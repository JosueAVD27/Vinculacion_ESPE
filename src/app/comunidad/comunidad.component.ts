import { Component } from '@angular/core';
import { categoria } from './categoria';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})

export class ComunidadComponent {
  selectedFilterValue = 'Autoridades';

  categoria: categoria[] = [
    //Autoridades
    { title: 'UPC', category: 'Autoridades', img: '../../assets/img/DirectorioComunidad/PoliciaNacional.jpg' },
    { title: 'Ministerio de Salud Pública', category: 'Autoridades', img: '../../assets/img/DirectorioComunidad/MinisterioDeSaludPublica.jpg'  },
    { title: 'Cuerpo de Bomberos', category: 'Autoridades', img: '../../assets/img/default/default_foto.jpg'  },
    //Escuelas
    { title: 'Unidad Educativa "Luz de America"', category: 'Escuelas', img: '../../assets/img/default/default_foto.jpg'  },
    { title: 'Unidad Educativa "13 de Abril"', category: 'Escuelas', img: '../../assets/img/default/default_foto.jpg'  },
    //Restaurantes
    { title: 'Costeñito', category: 'Restaurantes', img: '../../assets/img/default/default_foto.jpg'  },
    { title: 'Restaurante 2', category: 'Restaurantes', img: '../../assets/img/default/default_foto.jpg'  },
    { title: 'Restaurante 3', category: 'Restaurantes', img: '../../assets/img/default/default_foto.jpg'  },
    { title: 'Restaurante 4', category: 'Restaurantes', img: '../../assets/img/default/default_foto.jpg'  },
  ];

  selectFilterValue(value: string): void {
    this.selectedFilterValue = value;
  }

  isFilterItemActive(category: string): boolean {
    return category === this.selectedFilterValue;
  }

  filterByCategoria(proyectos: categoria[], categoria: string): categoria[] {
    return proyectos.filter(p => p.category === categoria);
  }
}
