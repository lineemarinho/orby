import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal-patient-record",
  templateUrl: "./modal-patient-record.component.html",
  styleUrls: ["./modal-patient-record.component.scss"],
})
export class ModalPatientRecordComponent {
  activatedTab: string = "sheets";
  tabsArray = [
    { name: "Fichas de Anamnese", id: "sheets" },
    {
      name: "Protocolos de Avaliação",
      id: "protocols",
    },
    { name: "Sessões de Neuromodulação", id: "sessions" },
    { name: "Relatórios", id: "reports" },
  ];
  @Output() onTabChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  setTab(tabId: string) {
    this.activatedTab = tabId;
  }
}
