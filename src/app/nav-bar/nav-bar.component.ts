import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: RouteService,
    private auth: AngularFireAuth,
    private fire: AngularFirestore,
    private authOb: AuthService
  ) {}
  authState: boolean = false;
  user: User;
  menu: boolean = false;
  title = 'Ram Kumar';
  items = ['Home', 'About', 'Resume', 'Contact Us'];
  admin: boolean = false;

  go(des: string) {
    des = des.toLowerCase().split(' ').join('');
    let go = () => {
      document.getElementById(des).scrollIntoView({ behavior: 'smooth' });
    };
    switch (des) {
      case 'discussions':
        this.router.fly(des);
        break;
      case 'myquestions':
        this.router.fly(des);
        break;
      case 'home':
        document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
        this.router.fly(des);
        break;
      default:
        this.router.fly('home');
        setTimeout(go, 200);
    }
  }

  signOut() {
    this.router.fly('home');
    this.authOb.signOut();
  }

  signIn() {
    this.authOb.signIn();
  }

  async isAdmin() {
    let res = await this.fire
      .collection('config')
      .doc('admins')
      .get()
      .toPromise();
    return res.data().value.includes(this.user.email);
  }

  ngOnInit() {
    this.auth.onAuthStateChanged(async (userOB) => {
      if (userOB) {
        this.user = userOB;
        this.authState = true;
        let state = await this.isAdmin();
        if (state == true) {
          this.admin = true;
        } else {
          this.admin = false;
        }
      } else {
        this.user = null;
        this.authState = false;
        this.admin = false;
      }
      // console.log(userOB);
    });

    window.addEventListener('scroll', (event) => {
      // let particles = document.getElementById('particles-js');
      let nav = document.getElementById('nav');
      if (window.scrollY > 150) {
        nav.style.backgroundColor = 'black';
      } else {
        nav.style.backgroundColor = 'transparent';
      }
    });
  }
}
