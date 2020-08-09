import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../body.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  items = ['Computer Networks', 'Computer Organization'];

  ngOnInit(): void {}
}
