import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../body.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  options: AnimationOptions = {
    path: '/assets/icon.json',
  };

  ngOnInit(): void {}
}
