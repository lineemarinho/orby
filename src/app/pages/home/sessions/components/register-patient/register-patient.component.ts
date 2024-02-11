import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-register-patient",
  templateUrl: "./register-patient.component.html",
  styleUrls: ["./register-patient.component.scss"],
})
export class RegisterPatientComponent {
  constructor(private modalSequence: ModalSequenceService) {}
  close() {
    this.modalSequence.close();
  }
}
