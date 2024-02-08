import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  activeItem: string = 'home';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeItem = event.urlAfterRedirects === '/home' ? 'home' : '';
      }
    });
  }

  openDashboardModal() {
    this.activeItem = 'dashboard';
  }

  home() {
    this.activeItem = 'home';
  }

  openHistoricoModal() {
    this.activeItem = 'historico';
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }
}
