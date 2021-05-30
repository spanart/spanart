import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { GQ_USER_ID, GQ_AUTH_TOKEN } from 'src/app/constants';
import { IAuthDetails } from 'src/app/interface/auth-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private userId: string = '';
  private _isAuthenticated = new BehaviorSubject(false);

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  setUserId(id: string) {
    this.userId = id;
    this._isAuthenticated.next(true);
  }

  saveUserData(id: string, token: string) {
    localStorage.setItem(GQ_USER_ID, id);
    localStorage.setItem(GQ_AUTH_TOKEN, token);
    this.setUserId(id);
  }

  getAuthDetails() {
    const userId = localStorage.getItem(GQ_USER_ID) ?? '';
    const token = localStorage.getItem(GQ_AUTH_TOKEN) ?? '';

    if (userId === '' || token === '')
      this.logout();

    var authDetails: IAuthDetails = { userId, token };
    return authDetails;
  }

  logout() {
    localStorage.removeItem(GQ_USER_ID);
    localStorage.removeItem(GQ_AUTH_TOKEN);
    this.userId = '';

    this._isAuthenticated.next(false);
    this.router.navigate(['/']);
  }

  // Add auth token as well
  autoLogin() {
    const id = localStorage.getItem(GQ_USER_ID);

    if (id) {
      this.setUserId(id);
    }
  }
}
