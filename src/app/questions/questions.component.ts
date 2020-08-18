import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  discussions = [];
  user;
  input = false;

  selectValue;
  tempDiscussions = [];

  select() {
    if (this.selectValue == 'all') {
      this.discussions = this.tempDiscussions;
    } else if (this.selectValue == 'answered') {
      this.discussions = this.tempDiscussions.filter((value) => {
        return value.payload.doc.data().answer.length > 0;
      });
    } else {
      this.discussions = this.tempDiscussions.filter((value) => {
        return value.payload.doc.data().answer.length == 0;
      });
    }
  }

  constructor(private fire: AngularFirestore) {
    this.setUser();
  }

  del(id, email) {
    this.fire
      .collection('discussions')
      .doc(email)
      .collection('questions')
      .doc(id)
      .delete();
  }

  async setUser() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.fire
      .collection('discussions/' + this.user.email + '/questions')
      .snapshotChanges()
      .subscribe((docs) => {
        this.discussions = docs;
        this.tempDiscussions = docs;
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
          name: this.user.name,
          email: this.user.email,
          pic: this.user.photoURL,
        });
    } else {
      alert('Fields Are Empty !!');
    }
  }

  setNav() {
    let nav_length = document.getElementById('nav').clientHeight;
    document.getElementById('nav-support').style.height =
      nav_length.toString() + 'px';
  }

  ngOnInit(): void {
    // this.setNav();
  }
}
