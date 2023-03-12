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
      caption: '<p><b>Ovlašteni servis</b> i <b>popravak</b> motocikla za marke<br>istih koje možete pronaći na stranicama <b>OLYMPIC MOTO ŠOLA</b>.</p>'
    },
    {
      src: 'assets/media/images/usluge/bike-renting.png',
      alt: 'Najam vozila',
      caption: '<p>Najam motocikla/quadova<br><b>dostupnih</b> u našoj trgovini.</p>'
    },
    {
      src: 'assets/media/images/usluge/bike-selling.png',
      alt: 'Prodaja vozila',
      caption: '<p>Prodaja motocikla koje također<br>možete pronaći na stranicama <b>OLYMPIC MOTO ŠOLA</b>.</p>'
    }
  ];
}
