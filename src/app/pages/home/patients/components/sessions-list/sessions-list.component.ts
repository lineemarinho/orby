import { Component } from "@angular/core";

@Component({
  selector: "app-sessions-list",
  templateUrl: "./sessions-list.component.html",
  styleUrls: ["./sessions-list.component.scss"],
})
export class SessionsListComponent {
  detail = false;
  openItem() {
    this.detail = !this.detail;
  }
}
