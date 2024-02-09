import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-modal-type-session",
  templateUrl: "./modal-type-session.component.html",
  styleUrls: ["./modal-type-session.component.scss"],
})
export class ModalTypeSessionComponent {
  constructor(private modalSequence: ModalSequenceService) {}

  startSession() {
    this.modalSequence.goTypeExercise();
  }
  back() {
    this.modalSequence.goSession();
  }
}
