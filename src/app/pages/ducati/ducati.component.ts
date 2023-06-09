import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ducati',
  templateUrl: './ducati.component.html',
  styleUrls: ['./ducati.component.scss'],
})
export class DucatiComponent implements OnInit, OnDestroy {
  aboutImages: any[] = [
    {
      src: 'assets/media/images/pages/ducati/slideshow/cucciolo.jpg',
      num: '1 / 4',
      caption: 'Prvi Ducatijev motocikl - Cucciolo',
    },
    {
      src: 'assets/media/images/pages/ducati/slideshow/agregat_cucciola_48cc.jpg',
      num: '2 / 4',
      caption: 'Pogonski agregat Cucciola - 48cc',
    },
    {
      src: 'assets/media/images/pages/ducati/slideshow/gran_sport_single_marianna.jpg',
      num: '3 / 4',
      caption: 'Ducati Gran sport single - Marianna',
    },
    {
      src: 'assets/media/images/pages/ducati/slideshow/pantah_tt2.jpg',
      num: '4 / 4',
      caption: 'Pantah TT2 - 1979.',
    },
  ];

  scramblerProducts: any[] = [
    {
      name: 'Ducati 1100 Dark PRO',
      src: 'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-2.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-3.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-4.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-5.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-6.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100DarkPro/1100DarkPro-7.jpg',
      ],
    },
    {
      name: 'Ducati 1100 Sport PRO',
      src: 'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-2.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-3.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-4.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-5.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-6.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100SportPro/1100SportPro-7.jpg',
      ],
    },
    {
      name: 'Ducati 1100 Tribute PRO',
      src: 'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-2.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-3.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-4.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-5.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-6.jpg',
        'assets/media/images/pages/ducati/products/scrambler/1100TributePro/1100TributePro-7.jpg',
      ],
    },
    {
      name: 'Ducati Full Throttle',
      src: 'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-1.png',
      images: [
        'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-2.jpg',
        'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-3.jpg',
        'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-4.jpg',
        'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-5.jpg',
        'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-6.jpg',
        'assets/media/images/pages/ducati/products/scrambler/FullThrottle/fullThrottle-7.jpg',
      ],
    },
    {
      name: 'Ducati Icon',
      src: 'assets/media/images/pages/ducati/products/scrambler/Icon/icon-1.png',
      images: [
        'assets/media/images/pages/ducati/products/scrambler/Icon/icon-2.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Icon/icon-3.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Icon/icon-4.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Icon/icon-5.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Icon/icon-6.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Icon/icon-7.jpg',
      ],
    },
    {
      name: 'Ducati Nightshift',
      src: 'assets/media/images/pages/ducati/products/scrambler/Nightshift/nightshift-1.png',
      images: [
        'assets/media/images/pages/ducati/products/scrambler/Nightshift/nightshift-2.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Nightshift/nightshift-3.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Nightshift/nightshift-4.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Nightshift/nightshift-5.jpg',
        'assets/media/images/pages/ducati/products/scrambler/Nightshift/nightshift-6.jpg',
      ],
    },
  ];

  xDiavelProducts: any[] = [
    {
      name: 'Ducati XDiavel Dark',
      src: 'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-1.png',
      images: [
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-2.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-3.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-4.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-5.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-6.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-7.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-8.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-9.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelDark/dark-10.jpg',
      ],
    },
    {
      name: 'Ducati XDiavel S',
      src: 'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-1.png',
      images: [
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-2.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-3.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-4.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-5.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-6.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-7.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-8.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-9.jpg',
        'assets/media/images/pages/ducati/products/xdiavel/XDiavelS/s-10.jpg',
      ],
    },
  ];

  hyperMotardProducts: any[] = [
    {
      name: 'Ducati HyperMotard 950',
      src: 'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-2.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-3.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-4.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-5.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-6.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-7.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-8.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-9.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-10.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950/950-11.jpg',
      ],
    },
    {
      name: 'Ducati HyperMotard 950 RVE',
      src: 'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-2.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-3.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-4.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-5.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-6.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-7.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950RVE/950RVE-8.jpg',
      ],
    },
    {
      name: 'Ducati HyperMotard 950 SP',
      src: 'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-1.png',
      images: [
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-2.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-3.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-4.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-5.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-6.jpg',
        'assets/media/images/pages/ducati/products/hypermotard/Hypermotard950SP/950SP-7.jpg',
      ],
    },
  ];

  streetfigtherProducts: any[] = [
    {
      name: 'Ducati Streetfighter V2',
      src: 'assets/media/images/pages/ducati/products/streetfighter/v2/v2-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/streetfighter/v2/v2-2.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v2/v2-3.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v2/v2-4.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v2/v2-5.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v2/v2-6.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v2/v2-7.jpg',
      ],
    },
    {
      name: 'Ducati Streetfighter V4',
      src: 'assets/media/images/pages/ducati/products/streetfighter/v4/v4-1.jpg',
      images: [],
    },
    {
      name: 'Ducati Streetfighter V4S',
      src: 'assets/media/images/pages/ducati/products/streetfighter/v4S/v4S-1.jpg',
      images: [],
    },
    {
      name: 'Ducati Streetfighter V4 SP2',
      src: 'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-2.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-3.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-4.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-5.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-6.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-7.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-8.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-9.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4sp2/v4SP2-10.jpg',
      ],
    },
    {
      name: 'Ducati Streetfighter V4 Lamborghini',
      src: 'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-1.png',
      images: [
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-2.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-3.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-4.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-5.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-6.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-7.jpg',
        'assets/media/images/pages/ducati/products/streetfighter/v4Lamborghini/v4lambo-8.jpg',
      ],
    },
  ];

  monsterProducts: any[] = [
    {
      name: 'Ducati Monster',
      src: 'assets/media/images/pages/ducati/products/monster/monster/monster-1.png',
      images: [
        'assets/media/images/pages/ducati/products/monster/monster/monster-2.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-3.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-4.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-5.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-6.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-7.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-8.jpg',
        'assets/media/images/pages/ducati/products/monster/monster/monster-9.jpg',
      ],
    },
    {
      name: 'Ducati Monster Plus',
      src: 'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-2.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-3.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-4.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-5.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-6.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterPlus/plus-7.jpg',
      ],
    },
    {
      name: 'Ducati Monster SP',
      src: 'assets/media/images/pages/ducati/products/monster/monsterSP/sp-1.jpg',
      images: [
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-2.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-3.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-4.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-5.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-6.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-7.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-8.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-9.jpg',
        'assets/media/images/pages/ducati/products/monster/monsterSP/sp-10.jpg',
      ],
    },
  ];

  multistradaProducts: any[] = [
    {
      name: 'Ducati Multistrada V2',
      src: 'assets/media/images/pages/ducati/products/multistrada/v2/v2-1.png',
      images: [
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-2.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-3.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-4.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-5.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-6.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-7.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-8.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-9.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-10.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2/v2-11.jpg',
      ],
    },
    {
      name: 'Ducati Multistrada V2 S',
      src: 'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-1.png',
      images: [
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-2.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-3.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-4.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-5.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-6.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-7.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-8.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-9.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-10.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-11.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v2s/v2s-12.jpg',
      ],
    },
    {
      name: 'Ducati Multistrada V4',
      src: 'assets/media/images/pages/ducati/products/multistrada/v4/v4-1.png',
      images: [
        'assets/media/images/pages/ducati/products/multistrada/v4/v4-2.jpg',
      ],
    },
    {
      name: 'Ducati Multistrada V4 S',
      src: 'assets/media/images/pages/ducati/products/multistrada/v4s/v4s-1.png',
      images: [
        'assets/media/images/pages/ducati/products/multistrada/v4s/v4s-2.jpg',
      ],
    },
    {
      name: 'Ducati Multistrada V4 Rally',
      src: 'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-1.png',
      images: [
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-2.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-3.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-4.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-5.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-6.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-7.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-8.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-9.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4rally/v4rally-10.jpg',
      ],
    },
    {
      name: 'Ducati Multistrada V4 Pikes Peak',
      src: 'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-1.png',
      images: [
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-2.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-3.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-4.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-5.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-6.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-7.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-8.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-9.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-10.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-11.jpg',
        'assets/media/images/pages/ducati/products/multistrada/v4pikespeak/ppeak-12.jpg',
      ],
    },
  ];

  diavelProducts: any[] = [
    {
      name: 'Ducati Diavel V4',
      src: 'assets/media/images/pages/ducati/products/diavel/v4/dv4-1.jpg',
      images: [],
    },
  ];

  panigaleProducts: any[] = [
    {
      name: 'Ducati Panigale V2',
      src: 'assets/media/images/pages/ducati/products/panigale/v2/v2-1.png',
      images: [
        'assets/media/images/pages/ducati/products/panigale/v2/v2-2.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-3.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-4.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-5.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-6.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-7.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-8.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-9.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-10.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-11.jpg',
        'assets/media/images/pages/ducati/products/panigale/v2/v2-12.jpg',
      ],
    },
    {
      name: 'Ducati Panigale V4',
      src: 'assets/media/images/pages/ducati/products/panigale/v4/v4-1.png',
      images: [
        'assets/media/images/pages/ducati/products/panigale/v4/v4-2.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-3.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-4.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-5.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-6.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-7.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-8.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-9.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-10.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4/v4-11.jpg',
      ],
    },
    {
      name: 'Ducati Panigale V4 S',
      src: 'assets/media/images/pages/ducati/products/panigale/v4s/v4s-1.png',
      images: [
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-2.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-3.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-4.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-5.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-6.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-7.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-8.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-9.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-10.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4s/v4s-11.jpg',
      ],
    },
    {
      name: 'Ducati Panigale V4 R',
      src: 'assets/media/images/pages/ducati/products/panigale/v4r/v4r-1.png',
      images: [
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-2.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-3.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-4.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-5.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-6.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-7.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-8.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-9.jpg',
        'assets/media/images/pages/ducati/products/panigale/v4r/v4r-10.jpg',
      ],
    },
  ];

  supersportProducts: any[] = [
    {
      name: 'Ducati Supersport 950',
      src: 'assets/media/images/pages/ducati/products/supersport/s950/s950-1.png',
      images: [
        'assets/media/images/pages/ducati/products/supersport/s950/s950-2.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950/s950-3.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950/s950-4.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950/s950-5.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950/s950-6.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950/s950-7.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950/s950-8.jpg',
      ],
    },
    {
      name: 'Ducati Supersport 950 S',
      src: 'assets/media/images/pages/ducati/products/supersport/s950s/s950s-1.png',
      images: [
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-2.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-3.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-4.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-5.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-6.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-7.jpg',
        'assets/media/images/pages/ducati/products/supersport/s950s/s950s-8.jpg',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  isGalleryOpen: boolean = false;
  selectedProductName: string = '';
  selectedProductImages: string[] = [];

  currentImage: any = this.aboutImages[0];
  currentIndex = 0;
  intervalId: any;

  // SLIDESHOW

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.aboutImages.length - 1
        : this.currentIndex - 1;
    this.currentImage = this.aboutImages[this.currentIndex];
    this.resetAutoPlay();
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex === this.aboutImages.length - 1
        ? 0
        : this.currentIndex + 1;
    this.currentImage = this.aboutImages[this.currentIndex];
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  // POPUP

  toggleBodyScrolling() {
    document.body.classList.toggle('no-scroll');
  }

  openGallery(product: any): void {
    if (product.images.length === 0) return;
    else if (product.images.length === 1) {
      window.open(product.images[0], '_blank');
      return;
    }
    this.isGalleryOpen = true;
    this.selectedProductName = product.name;
    this.selectedProductImages = product.images;
    this.toggleBodyScrolling();
  }

  closeGallery(): void {
    this.isGalleryOpen = false;
    this.selectedProductName = '';
    this.selectedProductImages = [];
    this.toggleBodyScrolling();
  }
}
