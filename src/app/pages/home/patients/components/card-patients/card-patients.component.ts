import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-patients",
  templateUrl: "./card-patients.component.html",
  styleUrls: ["./card-patients.component.scss"],
})
export class CardPatientsComponent {
  @Input() data: boolean = true;
}
