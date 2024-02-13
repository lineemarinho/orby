import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Iuser } from "src/app/shared/interfaces/user.interface";
import { UserDataService } from "src/app/shared/services/api/user-data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  @Output() onCreatePassword = new EventEmitter<boolean>();
  user: Partial<Iuser> = {
    email: "",
    name: "",
    surname: "",
    token: "",
  };
  listNetwork = [
    { name: "google", img: "assets/images/icons/google.svg", id: "googleId" },
    {
      name: "facebook",
      img: "assets/images/icons/facebook.svg",
      id: "facebookId",
    },
    { name: "apple", img: "assets/images/icons/apple.svg", id: "appleId" },
  ];

  constructor(private userDataService: UserDataService) {}
  save() {
    this.onCreatePassword.emit(true);
  }
  createUser() {
    this.userDataService.updateUser(this.user);
    this.onCreatePassword.emit(true);
  }
}
