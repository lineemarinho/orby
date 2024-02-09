import { Component } from "@angular/core";

@Component({
  selector: "app-protocols",
  templateUrl: "./protocols.component.html",
  styleUrls: ["./protocols.component.scss"],
})
export class ProtocolsComponent {
  detail = false;
  openItem() {
    this.detail = !this.detail;
  }
}
