import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: [
    './questions.component.scss',
    '../discussions/discussions.component.scss',
  ],
})
export class QuestionsComponent implements OnInit {
  discussions = [];
  user: User;
  input = false;

  constructor(private fire: AngularFirestore, private auth: AngularFireAuth) {
    this.setUser();
  }

  async setUser() {
    this.user = await this.auth.currentUser;
    this.fire
      .collection('discussions/' + this.user.email + '/questions')
      .valueChanges()
      .subscribe((docs) => {
        this.discussions = docs;
      });
  }

  createQuestion() {
    this.input = true;
  }

  create() {
    this.input = false;
    let ti: any = document.getElementById('title');
    let que: any = document.getElementById('question');

    if (ti != null && que != null) {
      this.fire
        .collection('discussions/' + this.user.email + '/questions')
        .add({
          title: ti.value,
          question: que.value,
          name: this.user.displayName,
          email: this.user.email,
          pic: this.user.photoURL,
        });
    } else {
      alert('Fields Are Empty !!');
    }
  }

  ngOnInit(): void {}
}
