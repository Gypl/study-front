import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private _isLoggedIn: boolean = false;
  private _user = new User();

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public setUsernameAndPassword(username:string, password:string) {
    this._user.password = password;
    this._user.username = username;
  }

  constructor(private router:Router,private authService: AuthService, private allertService:AllertService) {}

  login() {
    this.authService.login(this._user.username).subscribe({
      next: (val) => {
        this._user.roles = val;
        this._isLoggedIn = true;
        this.router.navigate(["/dashboard"])
      },
      error: (err) => this.allertService.showError("Ошибка авторизации"),
    });
  }

  register() {
    this._isLoggedIn = false;
    this.authService.register(this._user.username,this._user.password).subscribe({
      next: (val) => {
        this.login();
      },
      error: (err) => this.allertService.showError("Ошибка регистрации"),
    });
  }

  logout() {
    this._isLoggedIn = false;
    this.router.navigate(["/login"])

  }

  getBasicAuthToken():string {
    return window.btoa(this._user.username + ':' + this._user.password);
  }

  isAdmin():boolean {
     return this._user.roles.includes(UserRole.ADMIN);
    // return true;
  }

}
