import { Component, ViewChild } from "@angular/core";
import { ModalParameterSettingComponent } from "../sessions/components/modal-parameter-setting/modal-parameter-setting.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ModalSequenceService } from "../sessions/services/modal-sequence.service";
import { CalendarComponent } from "src/app/shared/components/calendar/calendar.component";
import { MatDatepicker } from "@angular/material/datepicker";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  iconAdd = "assets/images/icons/iconAdd.svg";
  iconDate = "assets/images/icons/iconDate.svg";
  indicators = [
    { name: "Acidente Vascular Encefálico" },
    { name: "Doença de Parkinson" },
    { name: "Lesão Medular" },
  ];
  @ViewChild("picker") datepicker!: MatDatepicker<any>;
  constructor(
    private modalSequence: ModalSequenceService,
    public dialog: MatDialog
  ) {}
  close() {
    this.modalSequence.close();
  }
  openDialog(): void {
    this.datepicker.open();
  }
  openFilter() {}
}
