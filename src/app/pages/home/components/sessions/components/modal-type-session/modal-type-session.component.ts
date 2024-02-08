import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-modal-type-session",
  templateUrl: "./modal-type-session.component.html",
  styleUrls: ["./modal-type-session.component.scss"],
})
export class ModalTypeSessionComponent {
  activeTab: string = 'anamnese';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
  back() {
    this.modalSequence.goSession();
  }
}
