import { Component } from "@angular/core";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"],
})
export class AuthenticationComponent {
  activeTab: string = "login";

  constructor() {
    console.log(this.createPassword);
  }

  ngOnInit() {
    console.log(this.createPassword);
  }
  createPassword = false;
  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
  handleCreatePassword(event: boolean): void {
    this.createPassword = event;
  }
  handleBack(data: any) {
    this.createPassword = false;
  }
}
