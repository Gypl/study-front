import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/security/services/auth.service';
import { UserSessionService } from 'src/app/security/services/user-session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  private _authForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  public get authForm() {
    return this._authForm;
  }

  constructor(public userSessionService:UserSessionService) {}

  loginSubmit(){
    this.updateUserSeesion()
    this.userSessionService.login();
  }

  registerSubmit(){
    this.updateUserSeesion()
    this.userSessionService.register();
  }

  updateUserSeesion() {
    this.userSessionService.setUsernameAndPassword(this._authForm.value.username!,this._authForm.value.password!);
  }

}
