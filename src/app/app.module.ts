import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './shared/components/input/input.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/home/components/menu/menu.component';
import { PatientsComponent } from './pages/home/components/patients/patients.component';
import { SessionsComponent } from './pages/home/components/sessions/sessions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { CardPatientsComponent } from './pages/home/components/patients/components/card-patients/card-patients.component';
import { CardSessionComponent } from './pages/home/components/sessions/components/card-session/card-session.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalGoSessionComponent } from './pages/home/components/sessions/components/modal-go-session/modal-go-session.component';
import { ModalTypeSessionComponent } from './pages/home/components/sessions/components/modal-type-session/modal-type-session.component';
import { ModalTypeExerciseSessionComponent } from './pages/home/components/sessions/components/modal-type-exercise-session/modal-type-exercise-session.component';
import { ModalPatientRecordComponent } from './pages/home/components/patients/components/modal-patient-record/modal-patient-record.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,
    ButtonComponent,
    HomeComponent,
    MenuComponent,
    PatientsComponent,
    SessionsComponent,
    DashboardComponent,
    HistoricComponent,
    CardPatientsComponent,
    CardSessionComponent,
    ModalGoSessionComponent,
    ModalTypeSessionComponent,
    ModalTypeExerciseSessionComponent,
    ModalPatientRecordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
