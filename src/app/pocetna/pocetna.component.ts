import { Component } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss'],
})
export class PocetnaComponent {
  video = {
    src: 'assets/media/cover-video.mp4',
    type: 'video/mp4',
  };

  markeImages = [
    {
      src: 'assets/media/images/logotipi/kawasaki-logo.png',
      alt: 'Kawasaki',
      class: 'obicni',
      route: 'pages/kawasaki',
    },
    {
      src: 'assets/media/images/logotipi/ducati-logo.png',
      alt: 'Ducati',
      class: 'najmanji',
      route: 'pages/ducati',
    },
    {
      src: 'assets/media/images/logotipi/mv-agusta-logo.png',
      alt: 'MV Agusta',
      class: 'najmanji',
      route: 'pages/mv-agusta',
    },
    {
      src: 'assets/media/images/logotipi/polaris-logo.png',
      alt: 'Polaris',
      class: 'obicni',
      route: 'pages/polaris',
    },
    {
      src: 'assets/media/images/logotipi/indian-logo.png',
      alt: 'Indian',
      class: 'indian',
      route: 'pages/indian',
    },
  ];

  uslugeImages = [
    {
      src: 'assets/media/images/usluge/bike-service.png',
      alt: 'Servis vozila',
      caption:
        '<p><b>Ovlašteni</b> smo servis svih <b>motocikala</b> i <b>skutera</b>',
    },
    {
      src: 'assets/media/images/usluge/bike-renting.png',
      alt: 'Quad/ATV prodaja i servis',
      caption: '<p>Prodaja i servis <b>quadova</b> i <b>ATV-ova</b></p>',
    },
    {
      src: 'assets/media/images/usluge/jet-ski.png',
      alt: 'Servis Jet-Ski',
      caption: '<p>Servis <b>Jet Ski-eva</b> svih marki</p>',
    },
  ];
}
