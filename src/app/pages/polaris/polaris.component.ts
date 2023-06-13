import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polaris',
  templateUrl: './polaris.component.html',
  styleUrls: ['./polaris.component.scss'],
})
export class PolarisComponent implements OnInit {
  aboutImages: any[] = [
    {
      src: 'assets/media/images/pages/polaris/slideshow/polaris_snow_traveler_1965.jpg',
      num: '1 / 4',
      caption: 'Polaris Snow Traveler - 1965.',
    },
    {
      src: 'assets/media/images/pages/polaris/slideshow/polaris_vatrogasci.jpg',
      num: '2 / 4',
      caption: 'Polaris s vatrogascima - Kaibab National Forest',
    },
    {
      src: 'assets/media/images/pages/polaris/slideshow/ambulance_polaris_ranger.jpg',
      num: '3 / 4',
      caption: 'Polaris u ulozi hitne pomoći - Ambulance Ranger',
    },
    {
      src: 'assets/media/images/pages/polaris/slideshow/polaris_atlantic_city_pd.jpg',
      num: '4 / 4',
      caption: 'Polaris u ulozi policije - Atlantic City PD.',
    },
  ];

  rzrProducts: any[] = [
    {
      name: 'RZR Trail Ultimate',
      src: 'assets/media/images/pages/polaris/products/RZR/Trail/trail-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/Trail/trail-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/Trail/trail-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/Trail/trail-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/Trail/trail-5.jpg',
      ],
    },
    {
      name: 'RZR Trail S Ultimate',
      src: 'assets/media/images/pages/polaris/products/RZR/TrailS/trails-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-5.jpg',
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-6.jpg',
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-7.jpg',
        'assets/media/images/pages/polaris/products/RZR/TrailS/trails-8.jpg',
      ],
    },
    {
      name: 'RZR XP',
      src: 'assets/media/images/pages/polaris/products/RZR/XP/xp-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/XP/xp-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/XP/xp-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/XP/xp-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/XP/xp-5.jpg',
      ],
    },
    {
      name: 'RZR Pro XP',
      src: 'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-5.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-6.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-7.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProXP/proxp-8.jpg',
      ],
    },
    {
      name: 'RZR XP 1000 Ultimate',
      src: 'assets/media/images/pages/polaris/products/RZR/XP1000/xp1000-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/XP1000/xp1000-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/XP1000/xp1000-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/XP1000/xp1000-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/XP1000/xp1000-5.jpg',
      ],
    },
    {
      name: 'RZR Turbo R',
      src: 'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-5.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-6.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-7.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-8.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-9.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-10.jpg',
        'assets/media/images/pages/polaris/products/RZR/TurboR/turbor-11.jpg',
      ],
    },
    {
      name: 'RZR Pro R',
      src: 'assets/media/images/pages/polaris/products/RZR/ProR/pror-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-2.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-3.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-4.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-5.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-6.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-7.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-8.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-9.jpg',
        'assets/media/images/pages/polaris/products/RZR/ProR/pror-10.jpg',
      ],
    },
  ];

  xpeditionProducts: any[] = [
    {
      name: 'XPEDITION XP',
      src: 'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-1.png',
      images: [
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-2.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-3.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-4.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-5.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-6.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-7.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-8.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/XP5/xp5-9.jpg',
      ],
    },
    {
      name: 'XPEDITION ADV',
      src: 'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-1.png',
      images: [
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-2.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-3.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-4.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-5.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-6.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-7.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-8.jpg',
        'assets/media/images/pages/polaris/products/XPEDITION/ADV/adv-9.jpg',
      ],
    },
  ];

  generalProducts: any[] = [
    {
      name: 'GENERAL 1000 Sport',
      src: 'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-1.png',
      images: [
        'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-2.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-3.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-4.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-5.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-6.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/1000S/1000s-7.jpg',
      ],
    },
    {
      name: 'GENERAL XP 1000',
      src: 'assets/media/images/pages/polaris/products/GENERAL/XP/xp-1.png',
      images: [
        'assets/media/images/pages/polaris/products/GENERAL/XP/xp-2.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/XP/xp-3.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/XP/xp-4.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/XP/xp-5.jpg',
        'assets/media/images/pages/polaris/products/GENERAL/XP/xp-6.jpg',
      ],
    },
  ];

  rangerProducts: any[] = [
    {
      name: 'RANGER SP 570',
      src: 'assets/media/images/pages/polaris/products/RANGER/SP570/sp570-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RANGER/SP570/sp570-2.jpg',
        'assets/media/images/pages/polaris/products/RANGER/SP570/sp570-3.jpg',
        'assets/media/images/pages/polaris/products/RANGER/SP570/sp570-4.jpg',
        'assets/media/images/pages/polaris/products/RANGER/SP570/sp570-5.jpg',
      ],
    },
    {
      name: 'RANGER 570 Full-Size',
      src: 'assets/media/images/pages/polaris/products/RANGER/570FS/fs570-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RANGER/570FS/fs570-2.jpg',
        'assets/media/images/pages/polaris/products/RANGER/570FS/fs570-3.jpg',
        'assets/media/images/pages/polaris/products/RANGER/570FS/fs570-4.jpg',
        'assets/media/images/pages/polaris/products/RANGER/570FS/fs570-5.jpg',
        'assets/media/images/pages/polaris/products/RANGER/570FS/fs570-6.jpg',
      ],
    },
    {
      name: 'RANGER 1000 Premium',
      src: 'assets/media/images/pages/polaris/products/RANGER/1000P/1000p-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RANGER/1000P/1000p-2.jpg',
        'assets/media/images/pages/polaris/products/RANGER/1000P/1000p-3.jpg',
        'assets/media/images/pages/polaris/products/RANGER/1000P/1000p-4.jpg',
      ],
    },
    {
      name: 'RANGER XP 1000',
      src: 'assets/media/images/pages/polaris/products/RANGER/XP1000/xp1000-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RANGER/XP1000/xp1000-2.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XP1000/xp1000-3.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XP1000/xp1000-4.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XP1000/xp1000-5.jpg',
      ],
    },
    {
      name: 'RANGER XP 1000 Texas Edition',
      src: 'assets/media/images/pages/polaris/products/RANGER/XP1000Texas/xp1000t-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RANGER/XP1000Texas/xp1000t-2.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XP1000Texas/xp1000t-3.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XP1000Texas/xp1000t-4.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XP1000Texas/xp1000t-5.jpg',
      ],
    },
    {
      name: 'RANGER XP Kinetic (električni)',
      src: 'assets/media/images/pages/polaris/products/RANGER/XPKinetic/xpk-1.png',
      images: [
        'assets/media/images/pages/polaris/products/RANGER/XPKinetic/xpk-2.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XPKinetic/xpk-3.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XPKinetic/xpk-4.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XPKinetic/xpk-5.jpg',
        'assets/media/images/pages/polaris/products/RANGER/XPKinetic/xpk-6.jpg',
      ],
    },
  ];

  sportsmanProducts: any[] = [
    {
      name: 'SPORTSMAN 450 H.O.',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/450HO/450ho-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/450HO/450ho-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/450HO/450ho-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/450HO/450ho-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/450HO/450ho-5.jpg',
      ],
    },
    {
      name: 'SPORTSMAN 570',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/570/570-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/570/570-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/570/570-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/570/570-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/570/570-5.jpg',
      ],
    },
    {
      name: 'SPORTSMAN 850',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/850/850-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/850/850-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/850/850-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/850/850-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/850/850-5.jpg',
      ],
    },
    {
      name: 'SPORTSMAN XP 1000',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000/xp1000-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000/xp1000-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000/xp1000-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000/xp1000-4.jpg',
      ],
    },
    {
      name: 'SPORTSMAN Touring 570',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/Touring570/t570-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring570/t570-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring570/t570-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring570/t570-4.jpg',
      ],
    },
    {
      name: 'SPORTSMAN Touring 850',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/Touring850/t850-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring850/t850-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring850/t850-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring850/t850-4.jpg',
      ],
    },
    {
      name: 'SPORTSMAN Touring XP 1000',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/Touring1000/t1000-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring1000/t1000-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring1000/t1000-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring1000/t1000-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Touring1000/t1000-5.jpg',
      ],
    },
    {
      name: 'SPORTSMAN XP 1000 S',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000S/xp1000s-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000S/xp1000s-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000S/xp1000s-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000S/xp1000s-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000S/xp1000s-5.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/XP1000S/xp1000s-6.jpg',
      ],
    },
    {
      name: 'SCRAMBLER 850',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/Scrambler850/s850-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/Scrambler850/s850-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Scrambler850/s850-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Scrambler850/s850-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Scrambler850/s850-5.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/Scrambler850/s850-6.jpg',
      ],
    },
    {
      name: 'SCRAMBLER XP 1000 S',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/ScramblerXP1000/sxp1000-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/ScramblerXP1000/sxp1000-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/ScramblerXP1000/sxp1000-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/ScramblerXP1000/sxp1000-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/ScramblerXP1000/sxp1000-5.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/ScramblerXP1000/sxp1000-6.jpg',
      ],
    },
    {
      name: 'SPORTSMAN 6x6 570',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/6x6570/6x6-570-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/6x6570/6x6-570-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/6x6570/6x6-570-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/6x6570/6x6-570-4.jpg',
      ],
    },
    {
      name: 'SPORTSMAN 570 Ride Command Edition',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/570RCE/570rce-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/570RCE/570rce-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/570RCE/570rce-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/570RCE/570rce-4.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/570RCE/570rce-5.jpg',
      ],
    },
    {
      name: 'SPORTSMAN 850 High Lifter Edition',
      src: 'assets/media/images/pages/polaris/products/SPORTSMAN/850HLE/850hle-1.png',
      images: [
        'assets/media/images/pages/polaris/products/SPORTSMAN/850HLE/850hle-2.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/850HLE/850hle-3.jpg',
        'assets/media/images/pages/polaris/products/SPORTSMAN/850HLE/850hle-4.jpg',
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
