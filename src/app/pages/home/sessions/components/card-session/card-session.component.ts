import { Component, Input } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";

@Component({
  selector: "app-card-session",
  templateUrl: "./card-session.component.html",
  styleUrls: ["./card-session.component.scss"],
})
export class CardSessionComponent {
  @Input() btnClass: string = "";
  @Input() time = true;
  @Input() play = false;
  constructor(private modalSequence: ModalSequenceService) {}
  openVideo() {
    this.modalSequence.goVideo();
  }
}
