import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authFire: AngularFireAuth) {}

  public signIn() {
    this.authFire.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  public signOut() {
    this.authFire.signOut();
  }
}
