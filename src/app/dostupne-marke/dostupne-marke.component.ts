import { Component } from '@angular/core';

@Component({
  selector: 'app-dostupne-marke',
  templateUrl: './dostupne-marke.component.html',
  styleUrls: ['./dostupne-marke.component.scss']
})
export class DostupneMarkeComponent {
  images = [
    {
      src: 'assets/media/images/logotipi/kawasaki-logo.png',
      alt: 'Kawasaki',
      class: 'obicni',
    },
    {
      src: 'assets/media/images/logotipi/ducati-logo.png',
      alt: 'Ducati',
      class: 'najmanji',
    },
    {
      src: 'assets/media/images/logotipi/mv-agusta-logo.png',
      alt: 'MV Agusta',
      class: 'najmanji',
    },
    {
      src: 'assets/media/images/logotipi/polaris-logo.png',
      alt: 'Polaris',
      class: 'obicni',
    },
    {
      src: 'assets/media/images/logotipi/indian-logo.png',
      alt: 'Indian',
      class: 'indian'
    }
  ];
}
