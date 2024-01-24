import { Component } from '@angular/core';

export interface Goals {
  id: number;
  name: string;
  imgSrc: string;
}

@Component({
  selector: 'app-agenda2030',
  templateUrl: './agenda2030.component.html',
  styleUrl: './agenda2030.component.scss'
})
export class Agenda2030Component {
  goals: Goals[] = [
    {
      id: 1,
      name: 'Sconfiggere la povertà',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-01.jpg'
    },
    {
      id: 2,
      name: 'Sconfiggere la fame',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-02.jpg'
    },
    {
      id: 3,
      name: 'Salute e benessere',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-03.jpg'
    },
    {
      id: 4,
      name: 'Istituzione di qualità',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-04.jpg'
    },
    {
      id: 5,
      name: 'Parità di genere',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-05.jpg'
    },
    {
      id: 6,
      name: 'Acqua pulita e servizi igenici sanitari',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-06.jpg'
    },
    {
      id: 7,
      name: 'Energia pulita e accessibile',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-07.jpg'
    },
    {
      id: 8,
      name: 'Lavoro dignitoso e crescita economica',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-08.jpg'
    },
    {
      id: 9,
      name: 'Imprese innovazione e infrastrutture',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-09.jpg'
    },
    {
      id: 10,
      name: 'Ridurre le disuguaglianze',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-10.jpg'
    },
    {
      id: 11,
      name: 'Città e comunità sostenibili',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-11.jpg'
    },
    {
      id: 12,
      name: 'Consumo e produzione responsabili',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-12.jpg'
    },
    {
      id: 13,
      name: 'Lotta contro il cambiamento climatico',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-13.jpg'
    },
    {
      id: 14,
      name: 'La vita sott\'acqua',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-14.jpg'
    },
    {
      id: 15,
      name: 'La vita sulla terra',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-15.jpg'
    },
    {
      id: 16,
      name: 'Pace, giustizia e istituzioni solide',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-16.jpg'
    },
    {
      id: 17,
      name: 'Partnership per gli obiettivi',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-17.jpg'
    },
    {
      id: 18,
      name: 'Obiettivi per lo sviluppo sostenibile',
      imgSrc: '../../assets/img/sdg/SDG-icon-IT-RGB-18.jpg'
    },

  ]
}
