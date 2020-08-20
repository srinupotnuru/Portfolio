import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss'],
})
export class ApproveComponent implements OnInit {
  discussions = [];
  question;
  tempDiscussions = [];

  constructor(private fire: AngularFirestore, private route: Router) {
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

    this.checkAdmin();
  }

  checkAdmin() {
    let user: any = sessionStorage.getItem('user');
    user = JSON.parse(user);

    if(!user.isAdmin) {
      this.route.navigate(['home']);
    }
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
