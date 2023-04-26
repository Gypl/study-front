import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const BASE_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(username: string): Observable<UserRole[]> {
    return this.http.post<UserRole[]>(BASE_URL + '/login', username);
  }

  public register(username: string, password:string): Observable<UserRole[]> {
    return this.http.post<UserRole[]>(BASE_URL + '/register', {
      username,password
    });
  }

}
