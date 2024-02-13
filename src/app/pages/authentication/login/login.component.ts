import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Iuser } from "src/app/shared/interfaces/user.interface";
import { UserService } from "src/app/shared/services/api/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  iconApple = "assets/images/icons/apple.svg";
  iconGoogle = "assets/images/icons/google.svg";
  iconFacebook = "assets/images/icons/facebook.svg";
  image = true;
  user: Partial<Iuser> = {
    email: "",
    password: "",
  };
  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  save() {
    console.log("acessar");
    this.userService.loginUser(this.user).subscribe({
      next: (response) => {
        console.log("Usuário criado com sucesso!", response);
        this.router.navigate(["/home"]);
      },
      error: (error) => {
        this.toastr.error(error);
      },
    });
  }
}
