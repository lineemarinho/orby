import { Component } from "@angular/core";
import { ModalSequenceService } from "../sessions/services/modal-sequence.service";

@Component({
  selector: "app-historic",
  templateUrl: "./historic.component.html",
  styleUrls: ["./historic.component.scss"],
})
export class HistoricComponent {
  iconAdd = "assets/images/icons/iconAdd.svg";
  iconDate = "assets/images/icons/iconDate.svg";
  filter = false;
  filterData = false;
  indicators = [
    { name: "Acidente Vascular Encefálico" },
    { name: "Doença de Parkinson" },
    { name: "Lesão Medular" },
  ];
  constructor(private modalSequence: ModalSequenceService) {}
  close() {
    this.modalSequence.close();
  }
  openFilters() {
    this.filter = !this.filter;
  }
  openDialog(): void {
    this.filterData = !this.filterData;
  }
}
