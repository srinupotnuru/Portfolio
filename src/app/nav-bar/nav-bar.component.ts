import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: RouteService,
    private authOb: AuthService,
    private app: AppComponent
  ) {
    this.setUser();
    app.user.subscribe((go) => {
      this.setUser();
    });
  }
  authState: boolean = false;
  user;
  menu: boolean = false;
  methods = false;
  title = 'Ram Kumar';
  items = ['Home', 'About', 'Resume', 'Contact Us'];

  setUser() {
    let userOB = JSON.parse(sessionStorage.getItem('user'));
    if (userOB != null) {
      this.user = userOB;
      this.authState = true;
    } else {
      this.user = null;
      this.authState = false;
    }
  }

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

  signIn(type) {
    this.authOb.signIn(type);
  }

  ngOnInit() {
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
