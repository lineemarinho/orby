import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  constructor(
    private modalSequence: ModalSequenceService,
    private router: Router
  ) {}
  editProfile() {
    this.modalSequence.goEditProfile();
  }
  feedback() {
    this.modalSequence.goFeedback();
  }

  exit() {
    this.router.navigate(["/login"]);
    this.modalSequence.close();
  }
}
