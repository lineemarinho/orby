import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatInputModule } from "@angular/material/input";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputComponent } from "./shared/components/input/input.component";
import { LoginComponent } from "./pages/authentication/login/login.component";
import { RegisterComponent } from "./pages/authentication/register/register.component";
import { AuthenticationComponent } from "./pages/authentication/authentication.component";
import { ButtonComponent } from "./shared/components/button/button.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./pages/home/components/menu/menu.component";
import { PatientsComponent } from "./pages/home/patients/patients.component";
import { SessionsComponent } from "./pages/home/sessions/sessions.component";
import { CardPatientsComponent } from "./pages/home/patients/components/card-patients/card-patients.component";
import { CardSessionComponent } from "./pages/home/sessions/components/card-session/card-session.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { ModalGoSessionComponent } from "./pages/home/sessions/components/modal-go-session/modal-go-session.component";
import { ModalTypeSessionComponent } from "./pages/home/sessions/components/modal-type-session/modal-type-session.component";
import { ModalTypeExerciseSessionComponent } from "./pages/home/sessions/components/modal-type-exercise-session/modal-type-exercise-session.component";
import { ModalPatientRecordComponent } from "./pages/home/patients/components/modal-patient-record/modal-patient-record.component";
import { ModalSelectDeviceComponent } from "./pages/home/sessions/components/modal-select-device/modal-select-device.component";
import { ModalParameterSettingComponent } from "./pages/home/sessions/components/modal-parameter-setting/modal-parameter-setting.component";
import { RegisterPatientComponent } from "./pages/home/sessions/components/register-patient/register-patient.component";
import { HistoricComponent } from "./pages/home/historic/historic.component";
import { DashboardComponent } from "./pages/home/dashboard/dashboard.component";
import { ProtocolsComponent } from "./pages/home/patients/components/protocols/protocols.component";
import { SheetsComponent } from "./pages/home/patients/components/sheets/sheets.component";
import { ReportsComponent } from "./pages/home/patients/components/reports/reports.component";
import { SessionsListComponent } from "./pages/home/patients/components/sessions-list/sessions-list.component";
import { NotificationComponent } from "./pages/home/sessions/components/notification/notification.component";
import { ProfileComponent } from "./pages/home/sessions/components/profile/profile.component";
import { EditProfileComponent } from "./pages/home/sessions/components/edit-profile/edit-profile.component";
import { FeedbackComponent } from "./pages/home/sessions/components/feedback/feedback.component";
import { CardSessionHistoryComponent } from "./pages/home/historic/components/card-session-history/card-session-history.component";
import { SessionPauseStopComponent } from "./pages/home/sessions/components/session-pause-stop/session-pause-stop.component";
import { CalendarComponent } from "./shared/components/calendar/calendar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";

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
    HistoricComponent,
    DashboardComponent,
    PatientsComponent,
    SessionsComponent,
    CardPatientsComponent,
    CardSessionComponent,
    ModalGoSessionComponent,
    ModalTypeSessionComponent,
    ModalTypeExerciseSessionComponent,
    ModalPatientRecordComponent,
    ModalSelectDeviceComponent,
    ModalParameterSettingComponent,
    RegisterPatientComponent,
    ProtocolsComponent,
    SheetsComponent,
    ReportsComponent,
    SessionsListComponent,
    NotificationComponent,
    ProfileComponent,
    EditProfileComponent,
    FeedbackComponent,
    CardSessionHistoryComponent,
    SessionPauseStopComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
