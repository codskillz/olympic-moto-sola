import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.scss'],
})
export class IndianComponent implements OnInit, OnDestroy {
  aboutImages: any[] = [
    {
      src: 'assets/media/images/pages/indian/slideshow/indian_1911.jpg',
      num: '1 / 4',
      caption: 'Indian 1911.',
    },
    {
      src: 'assets/media/images/pages/indian/slideshow/indian_1920_powerplus.jpg',
      num: '2 / 4',
      caption: 'Indian Powerplus 1920.',
    },
    {
      src: 'assets/media/images/pages/indian/slideshow/indian_1928_sidecar.jpg',
      num: '3 / 4',
      caption: 'Indian w/ sidecar 1928.',
    },
    {
      src: 'assets/media/images/pages/indian/slideshow/indian_1950_chief_blackhawk.jpg',
      num: '4 / 4',
      caption: 'Indian Chief Blackhawk 1950.',
    },
  ];

  scoutProducts: any[] = [
    {
      name: 'Indian Scout',
      src: '/assets/media/images/pages/indian/products/scout/Scout/scout-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/scout/Scout/scout-2.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout/scout-3.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout/scout-4.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout/scout-5.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout/scout-6.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout/scout-7.jpg',
      ],
    },
    {
      name: 'Indian Scout Bobber',
      src: '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-2.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-3.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-4.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-5.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-6.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-7.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-8.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber/scout-bobber-9.jpg',
      ],
    },
    {
      name: 'Indian Scout Bobber Twenty',
      src: '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-2.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-3.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-4.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-5.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-6.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-7.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Bobber-Twenty/scout-bobber-twenty-8.jpg',
      ],
    },
    {
      name: 'Indian Scout Rogue',
      src: '/assets/media/images/pages/indian/products/scout/Scout-Rogue/scout-rogue-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/scout/Scout-Rogue/scout-rogue-2.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Rogue/scout-rogue-3.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Rogue/scout-rogue-4.jpg',
        '/assets/media/images/pages/indian/products/scout/Scout-Rogue/scout-rogue-5.jpg',
      ],
    },
  ];

  ftrProducts: any[] = [
    {
      name: 'Indian FTR 1200',
      src: '/assets/media/images/pages/indian/products/ftr/FTR/ftr-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-2.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-3.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-4.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-5.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-6.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-7.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-8.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-9.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR/ftr-10.jpg',
      ],
    },
    {
      name: 'Indian FTR Rally 1200',
      src: '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-2.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-3.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-4.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-5.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-6.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-7.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-8.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Rally/rally-9.jpg',
      ],
    },
    {
      name: 'Indian FTR Sports',
      src: '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-2.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-3.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-4.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-5.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-6.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-7.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-8.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-9.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-Sports/sports-10.jpg',
      ],
    },
    {
      name: 'Indian FTR Carbon',
      src: '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-2.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-3.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-4.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-5.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-6.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-7.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-8.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-9.jpg',
        '/assets/media/images/pages/indian/products/ftr/FTR-R-Carbon/r-carbon-10.jpg',
      ],
    },
  ];

  cruiserProducts: any[] = [
    {
      name: 'Indian Chief Dark Horse',
      src: '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-2.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-3.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-4.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-5.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-6.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-7.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-8.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-9.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Dark-Horse/chief-dark-horse-10.jpg',
      ],
    },
    {
      name: 'Indian Chief Bobber Dark Horse',
      src: '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-2.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-3.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-4.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-5.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-6.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-7.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-8.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-9.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Chief-Bobber-Dark-Horse/bobber-dark-horse-10.jpg',
      ],
    },
    {
      name: 'Indian Super Chief Limited',
      src: '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-2.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-3.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-4.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-5.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-6.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-7.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-8.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-9.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Super-Chief-Limited/super-chief-limited-10.jpg',
      ],
    },
    {
      name: 'Indian Sport Chief',
      src: '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-2.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-3.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-4.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-5.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-6.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-7.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-8.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-9.jpg',
        '/assets/media/images/pages/indian/products/cruiser/Sport-Chief/sport-chief-10.jpg',
      ],
    },
  ];

  baggerProducts: any[] = [
    {
      name: 'Indian Springfield',
      src: '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-2.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-3.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-4.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-5.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-6.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield/springfield-7.jpg',
      ],
    },
    {
      name: 'Indian Springfield Dark Horse',
      src: '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-2.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-3.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-4.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-5.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-6.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-7.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-8.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-9.jpg',
        '/assets/media/images/pages/indian/products/bagger/Springfield-Dark-Horse/springfield-dh-10.jpg',
      ],
    },
    {
      name: 'Indian Chieftain Dark Horse',
      src: '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-2.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-3.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-4.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-5.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-6.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-7.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-8.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain/chieftain-dh-9.jpg',
      ],
    },
    {
      name: 'Indian Chieftain Limited',
      src: '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-2.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-3.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-4.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-5.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-6.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-7.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-8.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-9.jpg',
        '/assets/media/images/pages/indian/products/bagger/Chieftain-Limited/chieftain-limited-10.jpg',
      ],
    },
    {
      name: 'Indian Challenger Dark Horse',
      src: '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-2.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-3.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-4.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-5.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-6.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-7.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-8.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-9.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Dark-Horse/challenger-dh-10.jpg',
      ],
    },
    {
      name: 'Indian Challenger Limited',
      src: '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-2.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-3.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-4.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-5.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-6.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-7.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-8.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-9.jpg',
        '/assets/media/images/pages/indian/products/bagger/Challenger-Limited/challenger-limited-10.jpg',
      ],
    },
  ];

  touringProducts: any[] = [
    {
      name: 'Indian Roadmaster',
      src: '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-2.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-3.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-4.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-5.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-6.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-7.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-8.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster/roadmaster-9.jpg',
      ],
    },
    {
      name: 'Indian Roadmaster Dark Horse',
      src: '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-2.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-3.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-4.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-5.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-6.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-7.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-8.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-9.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Dark-Horse/roadmaster-dh-10.jpg',
      ],
    },
    {
      name: 'Indian Roadmaster Limited',
      src: '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-2.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-3.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-4.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-5.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-6.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-7.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-8.jpg',
        '/assets/media/images/pages/indian/products/touring/Roadmaster-Limited/roadmaster-limited-9.jpg',
      ],
    },
    {
      name: 'Indian Pursuit Dark Horse',
      src: '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-2.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-3.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-4.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-5.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-6.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-7.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-8.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-9.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Dark-Horse/pursuit-dh-10.jpg',
      ],
    },
    {
      name: 'Indian Pursuit Limited',
      src: '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-1.jpg',
      details: '',
      images: [
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-2.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-3.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-4.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-5.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-6.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-7.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-8.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-9.jpg',
        '/assets/media/images/pages/indian/products/touring/Pursuit-Limited/pursuit-limited-10.jpg',
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
