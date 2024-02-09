import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalGoSessionComponent } from "./components/modal-go-session/modal-go-session.component";
import { ModalTypeSessionComponent } from "./components/modal-type-session/modal-type-session.component";
import { ModalSequenceService } from "./services/modal-sequence.service";

@Component({
  selector: "app-sessions",
  templateUrl: "./sessions.component.html",
  styleUrls: ["./sessions.component.scss"],
})
export class SessionsComponent {
  iconAdd = "assets/images/icons/add.svg";
  iconUser = "assets/images/icons/user.svg";
  constructor(
    public dialog: MatDialog,
    private modalSequence: ModalSequenceService
  ) {}

  startSession() {
    this.modalSequence.goSession();
  }

  goRegister() {
    this.modalSequence.goRegister();
  }
}
