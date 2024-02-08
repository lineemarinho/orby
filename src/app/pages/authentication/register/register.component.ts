import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  listNetwork = [
    { name: 'google', img: 'assets/images/icons/google.svg', id: 'googleId' },
    {
      name: 'facebook',
      img: 'assets/images/icons/facebook.svg',
      id: 'facebookId',
    },
    { name: 'apple', img: 'assets/images/icons/apple.svg', id: 'appleId' },
  ];
  save() {}
}
