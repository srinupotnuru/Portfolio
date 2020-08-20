import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  call: Subject<Object> = new Subject<Object>();
  public user: Observable<Object> = this.call.asObservable();

  constructor(private auth: AngularFireAuth, private fire: AngularFirestore) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        sessionStorage.setItem('reload', 'false');
        this.setSession(user);
      }
      document.getElementById('loading').style.display = 'none';
      document.getElementById('all').style.filter = 'blur(0px)';
    });
  }

  async setSession(user: firebase.User) {
    let info: any = {};
    info['name'] = user.displayName;
    info['email'] = user.email;
    info['pic'] = user.photoURL;
    info['uid'] = user.uid;

    let val = await this.fire
      .collection('config')
      .doc('admins')
      .get()
      .toPromise();
    info['isAdmin'] = val.data().value.includes(user.email);

    info = JSON.stringify(info);
    sessionStorage.setItem('user', info);
    this.call.next('reload');
  }
}
