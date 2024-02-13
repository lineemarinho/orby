import { Component } from "@angular/core";
import { UserService } from "src/app/shared/services/api/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.save();
  }
  save() {
    console.log("acessar");
    this.userService.getUser().subscribe({
      next: (response) => {
        console.log("Usuário criado com sucesso!", response);
      },
      error: (error) => {},
    });
  }
}
