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
      alt: 'Kawasaki logo',
      class: 'obicni',
    },
    {
      src: 'assets/media/images/logotipi/ducati-logo.png',
      alt: 'Ducati logo',
      class: 'obicni',
    },
    {
      src: 'assets/media/images/logotipi/mv-agusta-logo.png',
      alt: 'MV Agusta logo',
      class: 'obicni',
    },
    {
      src: 'assets/media/images/logotipi/polaris-logo.png',
      alt: 'Polaris logo',
      class: 'obicni',
    }
  ];
}
