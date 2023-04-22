import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kawasaki',
  templateUrl: './kawasaki.component.html',
  styleUrls: ['./kawasaki.component.scss'],
})
export class KawasakiComponent implements OnInit, OnDestroy {
  aboutImages: any[] = [
    {
      src: 'assets/media/images/pages/kawasaki/slideshow/type88.jpg',
      num: '1 / 4',
      caption: 'Kawasaki Type88 avion',
    },
    {
      src: 'assets/media/images/pages/kawasaki/slideshow/t-4.jpg',
      num: '2 / 4',
      caption: 'Kawasaki T-4 japanski borbeni avion',
    },
    {
      src: 'assets/media/images/pages/kawasaki/slideshow/industrial-robot.jpg',
      num: '3 / 4',
      caption: 'Kawasaki industrijski robot',
    },
    {
      src: 'assets/media/images/pages/kawasaki/slideshow/kawasaki-xi750r.jpg',
      num: '4 / 4',
      caption: 'Kawasaki XI750R',
    },
  ];

  supersportProducts: any[] = [
    {
      name: 'Kawasaki Ninja H2R',
      src: '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R.png',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2R/NinjaH2R_7.jpg',
      ],
    },
    {
      name: 'Kawasaki ZX-10RR',
      src: '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10RR/ZX10RR_10.jpg',
      ],
    },
    {
      name: 'Kawasaki ZX-10R',
      src: '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/ZX10R/ZX10R_11.jpg',
      ],
    },
    {
      name: 'Kawasaki ZX-4RR',
      src: '/assets/media/images/pages/kawasaki/products/supersport/ZX4RR/ZX-4RR.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/ZX4RR/ZX-4RR_1.jpg',
      ],
    },
    {
      name: 'Kawasaki Ninja H2 SXSE',
      src: '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_13.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_14.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_15.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_16.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_17.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SXSE/NinjaH2SXSE_18.jpg',
      ],
    },
    {
      name: 'Kawasaki Ninja H2 SX',
      src: '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_13.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_14.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_15.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_16.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaH2SX/NinjaH2SX_17.jpg',
      ],
    },
    {
      name: 'Kawasaki 1000 SX',
      src: '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_13.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_14.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_15.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_16.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_17.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_18.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja1000SX/Ninja1000SX_18.jpg',
      ],
    },
    {
      name: 'Kawasaki Ninja 650',
      src: '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja650/Ninja650_13.jpg',
      ],
    },
    {
      name: 'Kawasaki Ninja 400',
      src: '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja400/Ninja400_9.jpg',
      ],
    },
    {
      name: 'Kawasaki Ninja 125',
      src: '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/Ninja125/Ninja125_10.jpg',
      ],
    },
    {
      name: 'Kawasaki Ninja EV',
      src: '/assets/media/images/pages/kawasaki/products/supersport/NinjaEV/NinjaEV.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaEV/NinjaEV_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaEV/NinjaEV_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaEV/NinjaEV_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaEV/NinjaEV_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supersport/NinjaEV/NinjaEV_5.jpg',
      ],
    },
  ];
  supernakedProducts: any = [
    {
      name: 'Kawasaki Z H2 SE',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE.png',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_13.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2SE/ZH2SE_14.jpg',
      ],
    },
    {
      name: 'Kawasaki Z H2',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/ZH2/ZH2_10.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 900 SE',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_13.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900SE/Z900SE_14.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 900',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z900/Z900_8.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 650',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_8.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_9.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_10.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_11.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_12.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_13.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_14.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_15.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_16.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_17.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_18.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_19.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z650/Z650_20.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 400',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_4.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_5.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_6.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_7.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z400/Z400_8.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 125',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/Z125/Z125.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/Z125/Z125_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z125/Z125_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z125/Z125_3.jpg',
      ],
    },
    {
      name: 'Kawasaki Z EV',
      src: '/assets/media/images/pages/kawasaki/products/supernaked/Z_EV/Z_EV.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/supernaked/Z_EV/Z_EV_1.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z_EV/Z_EV_2.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z_EV/Z_EV_3.jpg',
        '/assets/media/images/pages/kawasaki/products/supernaked/Z_EV/Z_EV_4.jpg',
      ],
    },
  ];
  modernClassicProducts: any = [
    {
      name: 'Kawasaki Z 900RS SE',
      src: '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_1.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_2.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_3.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_4.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_5.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_6.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_7.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_8.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RSSE/Z900RSSE_9.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 900RS',
      src: '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_1.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_2.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_3.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_4.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_5.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_6.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_7.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_8.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_9.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_10.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z900RS/Z900RS_11.jpg',
      ],
    },
    {
      name: 'Kawasaki Z 650RS',
      src: '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_1.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_2.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_3.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_4.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_5.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_6.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_7.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_8.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_9.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_10.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_11.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_12.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_13.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_14.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/Z650RS/Z650RS_15.jpg',
      ],
    },
    {
      name: 'Kawasaki W800',
      src: '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_1.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_2.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_3.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_4.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_5.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_6.jpg',
        '/assets/media/images/pages/kawasaki/products/modern-classic/W800/W800_7.jpg',
      ],
    },
  ];
  urbanCruiserProducts: any = [
    {
      name: 'Kawasaki Vulcan S',
      src: '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_1.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_2.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_3.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_4.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_5.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_6.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_7.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_8.jpg',
        '/assets/media/images/pages/kawasaki/products/urban-cruiser/VulcanS/VulcanS_9.jpg',
      ],
    },
  ];
  adventureTourerProducts: any = [
    {
      name: 'Kawasaki Versys 1000SE',
      src: '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_1.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_2.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_3.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_4.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_5.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_6.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_7.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_8.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_9.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_10.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_11.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_12.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_13.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_14.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_15.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000SE/Versys1000SE_16.jpg',
      ],
    },
    {
      name: 'Kawasaki Versys 1000S',
      src: '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S_1.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S_2.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S_3.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S_4.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S_5.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000S/Versys1000S_6.jpg',
      ],
    },
    {
      name: 'Kawasaki Versys 1000',
      src: '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_1.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_2.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_3.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_4.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_5.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_6.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys1000/Versys1000_7.jpg',
      ],
    },
    {
      name: 'Kawasaki Versys 650',
      src: '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_1.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_2.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_3.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_4.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_5.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_6.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_7.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_8.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_9.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_10.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_11.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_12.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_13.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_14.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_15.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_16.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_17.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_18.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_19.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_20.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_21.jpg',
        '/assets/media/images/pages/kawasaki/products/adventure-tourer/Versys650/Versys650_22.jpg',
      ],
    },
  ];
  enduroProducts: any = [
    {
      name: 'Kawasaki KX 450X',
      src: '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_1.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_2.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_3.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_4.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_5.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_6.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_7.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_8.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_9.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_10.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_11.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_12.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX450X/KX450X_13.jpg',
      ],
    },
    {
      name: 'Kawasaki KX 250X',
      src: '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_1.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_2.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_3.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_4.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_5.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_6.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_7.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_8.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_9.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_10.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_11.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_12.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KX250X/KX250X_13.jpg',
      ],
    },
    {
      name: 'Kawasaki KLX 140R',
      src: '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R_1.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R_2.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R_3.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R_4.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R_5.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX140R/KLX140R_6.jpg',
      ],
    },
    {
      name: 'Kawasaki KLX 110R',
      src: '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_1.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_2.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_3.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_4.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_5.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_6.jpg',
        '/assets/media/images/pages/kawasaki/products/enduro/KLX110R/KLX110R_7.jpg',
      ],
    },
  ];
  motocrossProducts: any = [
    {
      name: 'Kawasaki KX 450',
      src: '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_1.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_2.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_3.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_4.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_5.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_6.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX450/KX450_7.jpg',
      ],
    },
    {
      name: 'Kawasaki KX 250',
      src: '/assets/media/images/pages/kawasaki/products/motocross/KX250/KX250.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/motocross/KX250/KX250_1.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX250/KX250_2.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX250/KX250_3.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX250/KX250_4.jpg',
      ],
    },
    {
      name: 'Kawasaki KX 85L',
      src: '/assets/media/images/pages/kawasaki/products/motocross/KX85L/KX85L.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/motocross/KX85L/KX85L_1.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85L/KX85L_2.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85L/KX85L_3.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85L/KX85L_4.jpg',
      ],
    },
    {
      name: 'Kawasaki KX 85',
      src: '/assets/media/images/pages/kawasaki/products/motocross/KX85/KX85.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/motocross/KX85/KX85_1.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85/KX85_2.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85/KX85_3.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85/KX85_4.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX85/KX85_5.jpg',
      ],
    },
    {
      name: 'Kawasaki KX 65',
      src: '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_1.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_2.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_3.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_4.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_5.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_6.jpg',
        '/assets/media/images/pages/kawasaki/products/motocross/KX65/KX65_7.jpg',
      ],
    },
  ];

  isGalleryOpen: boolean = false;
  selectedProductName: string = '';
  selectedProductImages: string[] = [];

  currentImage: any = this.aboutImages[0];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

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
