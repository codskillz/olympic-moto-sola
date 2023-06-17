import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mv-agusta',
  templateUrl: './mv-agusta.component.html',
  styleUrls: ['./mv-agusta.component.scss'],
})
export class MvAgustaComponent implements OnInit, OnDestroy {
  aboutImages: any[] = [
    {
      src: 'assets/media/images/pages/mv-agusta/slideshow/MVAgusta-98-corsa-1946-min.jpg',
      num: '1 / 4',
      caption: 'MV Agusta 98 Corsa - 1946.',
    },
    {
      src: 'assets/media/images/pages/mv-agusta/slideshow/MV_Agusta_125_2Turismo_1950-min.jpg',
      num: '2 / 4',
      caption: 'MV Agusta 125 2 Turismo - 1950.',
    },
    {
      src: 'assets/media/images/pages/mv-agusta/slideshow/MV_Agusta_Scrambler-1973-min.jpg',
      num: '3 / 4',
      caption: 'MV Agusta Scrambler - 1973.',
    },
    {
      src: 'assets/media/images/pages/mv-agusta/slideshow/MVAgusta-125S-1978-min.jpg',
      num: '4 / 4',
      caption: 'MV Agusta 125 S - 1978.',
    },
  ];

  brutaleProducts: any[] = [
    {
      name: 'Brutale Rosso',
      src: 'assets/media/images/pages/mv-agusta/products/brutale/rosso/rosso-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/brutale/rosso/rosso-2.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rosso/rosso-3.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rosso/rosso-4.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rosso/rosso-5.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rosso/rosso-6.jpg',
      ],
    },
    {
      name: 'Brutale RR',
      src: 'assets/media/images/pages/mv-agusta/products/brutale/rr/rr-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/brutale/rr/rr-2.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rr/rr-3.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rr/rr-4.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rr/rr-5.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/rr/rr-6.jpg',
      ],
    },
    {
      name: 'Brutale 1000 RR',
      src: 'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-2.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-3.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-4.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-5.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-6.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-7.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-8.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-9.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-10.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rr/1000rr-11.jpg',
      ],
    },
    {
      name: 'Brutale 1000 RS',
      src: 'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-2.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-3.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-4.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-5.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-6.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-7.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-8.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-9.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-10.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-11.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-12.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-13.jpg',
        'assets/media/images/pages/mv-agusta/products/brutale/1000rs/1000rs-14.jpg',
      ],
    },
  ];

  dragsterProducts: any[] = [
    {
      name: 'Dragster Rosso',
      src: 'assets/media/images/pages/mv-agusta/products/dragster/rosso/rosso-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/dragster/rosso/rosso-2.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rosso/rosso-3.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rosso/rosso-4.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rosso/rosso-5.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rosso/rosso-6.jpg',
      ],
    },
    {
      name: 'Dragster RR',
      src: 'assets/media/images/pages/mv-agusta/products/dragster/rr/rr-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/dragster/rr/rr-2.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr/rr-3.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr/rr-4.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr/rr-5.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr/rr-6.jpg',
      ],
    },
    {
      name: 'Dragster RR SCS',
      src: 'assets/media/images/pages/mv-agusta/products/dragster/rr-scs/rr-scs-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/dragster/rr-scs/rr-scs-2.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr-scs/rr-scs-3.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr-scs/rr-scs-4.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr-scs/rr-scs-5.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rr-scs/rr-scs-6.jpg',
      ],
    },
    {
      name: 'Dragster RC SCS',
      src: 'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-2.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-3.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-4.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-5.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-6.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-7.jpg',
        'assets/media/images/pages/mv-agusta/products/dragster/rc-scs/rc-scs-8.jpg',
      ],
    },
  ];

  turismoVeloceProducts: any[] = [
    {
      name: 'Turismo Veloce Rosso',
      src: 'assets/media/images/pages/mv-agusta/products/turismo-veloce/rosso/rosso-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rosso/rosso-2.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rosso/rosso-3.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rosso/rosso-4.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rosso/rosso-5.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rosso/rosso-6.jpg',
      ],
    },
    {
      name: 'Turismo Veloce Lusso',
      src: 'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-2.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-3.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-4.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-5.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-6.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-7.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-8.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-9.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-10.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-11.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso/lusso-12.jpg',
      ],
    },
    {
      name: 'Turismo Veloce Lusso SCS',
      src: 'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-2.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-3.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-4.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-5.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-6.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-7.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-8.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-9.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-10.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/lusso-scs/lusso-scs-11.jpg',
      ],
    },
    {
      name: 'Turismo Veloce RC SCS',
      src: 'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-2.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-3.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-4.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-5.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-6.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-7.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-8.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-9.jpg',
        'assets/media/images/pages/mv-agusta/products/turismo-veloce/rc-scs/rc-scs-10.jpg',
      ],
    },
  ];

  f3Products: any[] = [
    {
      name: 'F3 Rosso',
      src: 'assets/media/images/pages/mv-agusta/products/f3/rosso/rosso-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/f3/rosso/rosso-2.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rosso/rosso-3.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rosso/rosso-4.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rosso/rosso-5.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rosso/rosso-6.jpg',
      ],
    },
    {
      name: 'F3 RR',
      src: 'assets/media/images/pages/mv-agusta/products/f3/rr/rr-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-2.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-3.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-4.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-5.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-6.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-7.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-8.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rr/rr-9.jpg',
      ],
    },
    {
      name: 'F3 RC',
      src: 'assets/media/images/pages/mv-agusta/products/f3/rc/rc-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-2.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-3.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-4.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-5.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-6.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-7.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-8.jpg',
        'assets/media/images/pages/mv-agusta/products/f3/rc/rc-9.jpg',
      ],
    },
  ];

  superveloceProducts: any[] = [
    {
      name: 'Superveloce 800',
      src: 'assets/media/images/pages/mv-agusta/products/superveloce/800/800-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/superveloce/800/800-2.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/800/800-3.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/800/800-4.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/800/800-5.jpg',
      ],
    },
    {
      name: 'Superveloce S',
      src: 'assets/media/images/pages/mv-agusta/products/superveloce/S/s-1.jpg',
      images: [
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-2.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-3.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-4.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-5.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-6.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-7.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-8.jpg',
        'assets/media/images/pages/mv-agusta/products/superveloce/S/s-9.jpg',
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
