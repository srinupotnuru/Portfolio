import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss', '../body.component.scss'],
})
export class InterestsComponent implements OnInit {
  constructor() {}
  items = ['YOGA', 'BADMINTION', 'TABLE TENNIS', 'TRAVELLING'];

  ngOnInit(): void {}
}
