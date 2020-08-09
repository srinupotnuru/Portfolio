import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}
  menu: boolean = false;
  title = 'Ram Kumar';
  items = ['Home', 'About', 'Resume', 'Dicussions', 'Contact Us'];

  go(des: String) {
    document
      .getElementById(des.toLowerCase().split(' ').join(''))
      .scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', (event) => {
      // let particles = document.getElementById('particles-js');
      let nav = document.getElementById('nav');
      if (window.scrollY > 150) {
        nav.style.backgroundColor = 'black';
      } else {
        nav.style.backgroundColor = 'transparent';
      }
    });
  }
}
