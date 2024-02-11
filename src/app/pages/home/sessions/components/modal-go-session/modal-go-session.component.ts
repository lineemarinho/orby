import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-modal-go-session",
  templateUrl: "./modal-go-session.component.html",
  styleUrls: ["./modal-go-session.component.scss"],
})
export class ModalGoSessionComponent {
  constructor(private modalSequence: ModalSequenceService) {}

  startSession() {
    this.modalSequence.goTypeSession();
  }
  close() {
    this.modalSequence.close();
  }
}
