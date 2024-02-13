import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Iuser } from "src/app/shared/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  private userSource = new BehaviorSubject<Partial<Iuser>>({});
  currentUser = this.userSource.asObservable();

  constructor() {}

  updateUser(user: Partial<Iuser>) {
    this.userSource.next(user);
  }
}
