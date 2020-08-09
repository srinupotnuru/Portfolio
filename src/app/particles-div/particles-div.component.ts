import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'particles-div',
  templateUrl: './particles-div.component.html',
  styleUrls: ['./particles-div.component.scss'],
})
export class ParticlesDivComponent implements OnInit {
  canvas;
  links = [
    'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1501471984908-815b996862f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ];
  index = 0;
  constructor() {}

  changeBG = () => {
    this.canvas.style.backgroundImage = 'url(' + this.links[this.index] + ')';
    this.canvas.style.backgroundRepeat = 'round';
    this.canvas.style.backgroundSize = 'auto';
    this.index = this.index + 1;
    this.index = this.index % this.links.length;
  };

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.canvas = document.getElementById('particles-js');
    setInterval(this.changeBG, 2000);
  }
}
