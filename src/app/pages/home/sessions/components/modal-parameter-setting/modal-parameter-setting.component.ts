import { Component } from "@angular/core";
import { ModalSequenceService } from "../../services/modal-sequence.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-modal-parameter-setting",
  templateUrl: "./modal-parameter-setting.component.html",
  styleUrls: ["./modal-parameter-setting.component.scss"],
})
export class ModalParameterSettingComponent {
  configure = false;
  public dialogRef: MatDialogRef<ModalParameterSettingComponent> | null = null;
  constructor(
    private modalSequence: ModalSequenceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  close() {
    this.modalSequence.goPatientSession();
  }
  back() {
    this.modalSequence.goTypeDevice();
  }
  openConfigure() {
    this.configure = !this.configure;
  }
}
