import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent {
  constructor(private modalSequence: ModalSequenceService) {}
  close() {
    this.modalSequence.close();
  }
}
