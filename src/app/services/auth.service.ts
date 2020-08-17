import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authFire: AngularFireAuth) {}

  public signIn(type) {
    let provider;
    switch (type) {
      case 'google':
        provider = new auth.GoogleAuthProvider();
        break;
      case 'fb':
        provider = new auth.FacebookAuthProvider();

        break;
      case 'yahoo':
        provider = new auth.OAuthProvider('yahoo.com');

        break;

      default:
        break;
    }

    this.authFire.signInWithRedirect(provider);
  }

  public signOut() {
    sessionStorage.clear();
    this.authFire.signOut();
    window.location.reload();
  }
}
