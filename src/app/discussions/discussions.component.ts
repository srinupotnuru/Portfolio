import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss'],
})
export class DiscussionsComponent implements OnInit {
  discussions = [];
  answer;
  currentId;
  question;
  email;
  tempDiscussions = [];

  constructor(private fire: AngularFirestore) {
    fire
      .collectionGroup('questions')
      .snapshotChanges()
      .subscribe((docs) => {
        this.discussions = docs;
        this.tempDiscussions = docs;
      });
  }

  postAnswer() {
    this.answerState = false;
    this.fire
      .collection('discussions')
      .doc(this.email)
      .collection('questions')
      .doc(this.currentId.toString())
      .update({ answer: this.answer });
    this.answer = '';
  }

  setNav() {
    let nav_length = document.getElementById('nav').clientHeight;
    document.getElementById('nav-support').style.height =
      nav_length.toString() + 'px';
  }
  answerState: boolean = false;

  ansQuestion(doc) {
    if (JSON.parse(sessionStorage.getItem('user')).isAdmin) {
      this.currentId = doc.id;
      this.question = doc.data().title;
      this.email = doc.data().email;
      this.answerState = true;
    }
  }

  ngOnInit(): void {
    this.setNav();
  }

  selectValue;

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

  create() {}
}
