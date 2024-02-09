import { Component } from "@angular/core";

@Component({
  selector: "app-sheets",
  templateUrl: "./sheets.component.html",
  styleUrls: ["./sheets.component.scss"],
})
export class SheetsComponent {
  detail = false;
  openItem() {
    this.detail = !this.detail;
  }
}
