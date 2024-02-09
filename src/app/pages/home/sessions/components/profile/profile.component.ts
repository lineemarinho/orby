import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  constructor(private modalSequence: ModalSequenceService) {}
  editProfile() {
    this.modalSequence.goEditProfile();
  }
  feedback() {
    this.modalSequence.goFeedback();
  }

  exit() {}
}
