import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-modal-type-exercise-session",
  templateUrl: "./modal-type-exercise-session.component.html",
  styleUrls: ["./modal-type-exercise-session.component.scss"],
})
export class ModalTypeExerciseSessionComponent {
  constructor(private modalSequence: ModalSequenceService) {}

  startSession() {
    this.modalSequence.goTypeDevice();
  }
  back() {
    this.modalSequence.goTypeSession();
  }
}
