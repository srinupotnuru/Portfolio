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
    'assets/1-min.jpeg',
    'assets/2-min.jpg',
    'assets/3-min.jpg',
    'assets/4-min.jpg',
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
