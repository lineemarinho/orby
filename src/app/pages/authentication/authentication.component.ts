import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  activeTab: string = 'login';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
