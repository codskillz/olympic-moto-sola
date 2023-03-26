import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  liItems = document.querySelectorAll('li');

  constructor() { }

  ngOnInit() {
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