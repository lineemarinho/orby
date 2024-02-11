import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-modal-select-device",
  templateUrl: "./modal-select-device.component.html",
  styleUrls: ["./modal-select-device.component.scss"],
})
export class ModalSelectDeviceComponent {
  constructor(private modalSequence: ModalSequenceService) {}

  startSession() {
    this.modalSequence.goParameter();
  }
  back() {
    this.modalSequence.goTypeExercise();
  }
  close() {
    this.modalSequence.close();
  }
}
