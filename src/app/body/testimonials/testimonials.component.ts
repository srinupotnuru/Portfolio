import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss', '../body.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  constructor(private fire: AngularFirestore) {
    fire
      .doc('config/fb')
      .get()
      .subscribe((doc) => {
        this.posts = doc.data().posts;
      });
  }

  posts = [];

  ngOnInit(): void {}
}
