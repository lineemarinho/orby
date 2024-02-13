import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iuser } from "../../interfaces/user.interface";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  public createUser(user: Partial<Iuser>) {
    return this.http.post<any>(
      `${environment.api.host}/api/v1/auth/user`,
      user
    );
  }
  public loginUser(user: Partial<Iuser>) {
    return this.http.post<any>(
      `${environment.api.host}/api/v1/auth/login`,
      user
    );
  }
  public getUser() {
    return this.http.get(
      "https://ortech-dev.azurewebsites.net/api/v1/auth/user?page=1&limit=10&withDeleted=false"
    );
  }
}
