import { Component } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent {

  video = {
    src: 'assets/media/cover-video.mp4',
    type: 'video/mp4'
  }

  markeImages = [
    {
      src: 'assets/media/images/logotipi/kawasaki-logo.png',
      alt: 'Kawasaki',
      class: 'obicni',
      route: 'pages/kawasaki'
    },
    {
      src: 'assets/media/images/logotipi/ducati-logo.png',
      alt: 'Ducati',
      class: 'najmanji',
      route: 'pages/ducati'
    },
    {
      src: 'assets/media/images/logotipi/mv-agusta-logo.png',
      alt: 'MV Agusta',
      class: 'najmanji',
      route: 'pages/mv-agusta'
    },
    {
      src: 'assets/media/images/logotipi/polaris-logo.png',
      alt: 'Polaris',
      class: 'obicni',
      route: 'pages/polaris'
    },
    {
      src: 'assets/media/images/logotipi/indian-logo.png',
      alt: 'Indian',
      class: 'indian',
      route: 'pages/indian'
    }
  ];

  uslugeImages = [
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
