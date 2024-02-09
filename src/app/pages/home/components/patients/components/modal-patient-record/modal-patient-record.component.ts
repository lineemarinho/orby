import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-patient-record',
  templateUrl: './modal-patient-record.component.html',
  styleUrls: ['./modal-patient-record.component.scss']
})
export class ModalPatientRecordComponent {
  @Input() tabsArray: string[] = ['anamnese', 'protocolo', 'sessoes', 'relatorio'];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setTab(index: number) {
    this.activatedTab = index;
    debugger;
    this.onTabChange.emit(this.activatedTab);
  }
}
