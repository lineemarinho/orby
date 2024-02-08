import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalGoSessionComponent } from '../components/modal-go-session/modal-go-session.component';
import { ModalTypeSessionComponent } from '../components/modal-type-session/modal-type-session.component';
import { ModalTypeExerciseSessionComponent } from '../components/modal-type-exercise-session/modal-type-exercise-session.component';
import { ModalPatientRecordComponent } from '../../patients/components/modal-patient-record/modal-patient-record.component';

@Injectable({
  providedIn: 'root',
})
export class ModalSequenceService {
  private dialogRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog) {}

  goSession() {
    this.dialogRef = this.dialog.open(ModalGoSessionComponent, {
      width: '800px',
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'advance') {
        this.goTypeSession();
      }
    });
  }

  goTypeSession() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalTypeSessionComponent, {
      width: '800px',
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'advance') {
        this.goTypeExercise();
      }
    });
  }

  goTypeExercise() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalTypeExerciseSessionComponent, {
      width: '800px',
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }

  advance() {
    this.dialogRef!.close('advance');
  }

  goPatientRecord() {
    this.dialogRef?.close();
    this.dialogRef = this.dialog.open(ModalPatientRecordComponent, {
      width: "800px",
      height: "800px",
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {});
  }
}
