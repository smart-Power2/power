import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidateService {
  constructor() {}
  validateRegister(user: {
    FirstName: undefined;
    LastName: undefined;
    email: undefined;
    phoneNumber: undefined;
    password: undefined;
  }) {
    if (
      user.FirstName == undefined ||
      user.LastName == undefined ||
      user.email == undefined ||
      user.phoneNumber == undefined ||
      user.password == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
