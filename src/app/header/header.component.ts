import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');

    if (menu !== null && hamburger) {
      hamburger.classList.toggle('active');
      menu.classList.toggle('show');
    }
  }
}
