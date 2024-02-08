import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  filters = [
    { name: 'Em sessão', active: false },
    { name: 'Sessão pausada', active: false },
    { name: 'Inativo', active: false },
  ];

  toggleFilter(selectedFilter: any) {
    if (!selectedFilter.active) {
      this.filters.forEach((filter) => {
        filter.active = false;
      });
      selectedFilter.active = true;
    } else {
      selectedFilter.active = false;
    }
  }
}
