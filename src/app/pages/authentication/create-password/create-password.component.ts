import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Iuser } from "src/app/shared/interfaces/user.interface";
import { UserDataService } from "src/app/shared/services/api/user-data.service";
import { UserService } from "src/app/shared/services/api/user.service";

@Component({
  selector: "app-create-password",
  templateUrl: "./create-password.component.html",
  styleUrls: ["./create-password.component.scss"],
})
export class CreatePasswordComponent {
  @Output() onBack = new EventEmitter<any>();
  user: Partial<Iuser> = {
    email: "",
    name: "",
    surname: "",
    token: "",
    password: "",
    confirmPassword: "",
  };
  private subscription: Subscription = new Subscription();

  constructor(
    private userDataService: UserDataService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.subscription = this.userDataService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
  back() {
    const data = {
      /* dados que você deseja enviar */
    };
    this.onBack.emit(data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  save() {
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        console.log("Usuário criado com sucesso!", response);
      },
      error: (error) => {
        console.error("Erro ao criar o usuário", error);
      },
    });
  }
}
