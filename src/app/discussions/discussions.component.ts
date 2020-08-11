import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss'],
})
export class DiscussionsComponent implements OnInit {
  discussions = [];

  constructor(private fire: AngularFirestore) {
    fire
      .collectionGroup('questions')
      .valueChanges()
      .subscribe((docs) => {
        this.discussions = docs;
      });
  }

  ngOnInit(): void {}
}
