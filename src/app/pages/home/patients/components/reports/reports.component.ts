import { Component } from "@angular/core";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent {
  detail = false;
  openItem() {
    this.detail = !this.detail;
  }
}
