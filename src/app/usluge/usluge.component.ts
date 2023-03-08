import { Component } from '@angular/core';

@Component({
  selector: 'app-usluge',
  templateUrl: './usluge.component.html',
  styleUrls: ['./usluge.component.scss']
})
export class UslugeComponent {

  images = [
    {
      src: 'assets/media/images/usluge/bike-service.png',
      alt: 'Servis vozila',
      caption: 'Ovlašteni servis i popravak motocikla za marke istih koje možete pronaći na stranicama OLYMPIC MOTO ŠOLA.'
    },
    {
      src: 'assets/media/images/usluge/bike-renting.png',
      alt: 'Najam vozila',
      caption: 'Najam motocikla/quadova dostupnih u našoj trgovini.'
    },
    {
      src: 'assets/media/images/usluge/bike-selling.png',
      alt: 'Prodaja vozila',
      caption: 'Prodaja motocikla koje također možete pronaći na stranicama OLYMPIC MOTO ŠOLA.'
    }
  ];
}
