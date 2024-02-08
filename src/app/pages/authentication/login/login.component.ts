import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  iconApple = 'assets/images/icons/apple.svg';
  iconGoogle = 'assets/images/icons/google.svg';
  iconFacebook = 'assets/images/icons/facebook.svg';
  image = true;
  constructor(private router: Router) {}
  save() {
    this.router.navigate(['/home']);
  }
}
