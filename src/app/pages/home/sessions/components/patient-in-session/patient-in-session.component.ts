import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-patient-in-session",
  templateUrl: "./patient-in-session.component.html",
  styleUrls: ["./patient-in-session.component.scss"],
})
export class PatientInSessionComponent {
  constructor(
    private modalSequence: ModalSequenceService,
    public dialog: MatDialog
  ) {}

  close() {}
}
