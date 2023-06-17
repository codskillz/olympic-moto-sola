import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  liItems = document.querySelectorAll('li');

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToSection(sectionId: string) {
    this.router.navigate(['']);

    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }

  toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    if (hamburger && menu) {
      hamburger.classList.toggle('active');
      menu.classList.toggle('show');
    }
  }
}
