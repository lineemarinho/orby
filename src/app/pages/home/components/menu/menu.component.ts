import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ModalSequenceService } from "../../sessions/services/modal-sequence.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  activeItem: string = "home";

  constructor(
    private router: Router,
    private modalSequence: ModalSequenceService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeItem = event.urlAfterRedirects === "/home" ? "home" : "";
      }
    });
  }

  openDashboardModal() {
    this.activeItem = "dashboard";
    this.modalSequence.goDashboard();
  }

  home() {
    this.activeItem = "home";
  }

  openHistoricoModal() {
    this.activeItem = "historico";
    this.modalSequence.goHistoric();
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }
}
