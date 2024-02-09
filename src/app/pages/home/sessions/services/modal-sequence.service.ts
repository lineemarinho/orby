import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ModalGoSessionComponent } from "../components/modal-go-session/modal-go-session.component";
import { ModalTypeSessionComponent } from "../components/modal-type-session/modal-type-session.component";
import { ModalTypeExerciseSessionComponent } from "../components/modal-type-exercise-session/modal-type-exercise-session.component";
import { ModalSelectDeviceComponent } from "../components/modal-select-device/modal-select-device.component";
import { ModalParameterSettingComponent } from "../components/modal-parameter-setting/modal-parameter-setting.component";
import { ModalPatientRecordComponent } from "../../patients/components/modal-patient-record/modal-patient-record.component";
import { RegisterPatientComponent } from "../components/register-patient/register-patient.component";
import { HistoricComponent } from "../../historic/historic.component";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { NotificationComponent } from "../components/notification/notification.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { EditProfileComponent } from "../components/edit-profile/edit-profile.component";
import { FeedbackComponent } from "../components/feedback/feedback.component";

@Injectable({
  providedIn: "root",
})
export class ModalSequenceService {
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog) {}

  goSession() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalGoSessionComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result === "advance") {
        this.goTypeSession();
      }
    });
  }

  goTypeSession() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalTypeSessionComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result === "advance") {
        this.goTypeExercise();
      }
    });
  }

  goTypeExercise() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalTypeExerciseSessionComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  goTypeDevice() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalSelectDeviceComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  goParameter() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalParameterSettingComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  advance() {
    this.dialogRef!.close("advance");
  }
  close() {
    this.dialogRef?.close();
  }

  goPatientRecord() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalPatientRecordComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }
  goRegister() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(RegisterPatientComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  goDashboard() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(DashboardComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  goHistoric() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(HistoricComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  goNotification() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(NotificationComponent, {
      width: "334px",
      height: "441px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }
  goProfile() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ProfileComponent, {
      width: "300px",
      height: "377px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }
  goEditProfile() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(EditProfileComponent, {
      width: "500px",
      height: "696px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  goFeedback() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(FeedbackComponent, {
      width: "400px",
      height: "426px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
