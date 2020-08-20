import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss'],
})
export class ApproveComponent implements OnInit {
  discussions = [];
  question;
  tempDiscussions = [];

  constructor(private fire: AngularFirestore) {
    fire
      .collectionGroup('questions')
      .snapshotChanges()
      .subscribe((docs) => {
        this.tempDiscussions = docs;
        this.discussions = this.tempDiscussions.filter((value) => {
          return value.payload.doc.data().approve == false;
        });
        this.tempDiscussions = this.discussions;
      });
  }
  del(id, uid) {
    this.fire
      .collection('discussions')
      .doc(uid)
      .collection('questions')
      .doc(id)
      .delete();
  }

  ok(id, uid) {
    this.fire
      .collection('discussions')
      .doc(uid)
      .collection('questions')
      .doc(id)
      .update({ approve: true });
  }
  ngOnInit(): void {}
}
