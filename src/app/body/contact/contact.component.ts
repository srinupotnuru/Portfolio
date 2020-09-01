import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../body.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  items = [
    {
      name: 'Location:',
      tag: 'Visakhapatnam ,vadlapudi , green city homes',
    },
    {
      name: 'Email:',
      tag: 'official@ramakumar.in',
    },
    {
      name: 'Call:',
      tag: '+91 991 238 9639',
    },
  ];

  ngOnInit(): void {}
}
