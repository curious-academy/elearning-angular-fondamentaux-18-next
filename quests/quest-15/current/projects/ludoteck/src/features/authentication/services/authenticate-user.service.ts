import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { AuthenticateUser } from '../models/authenticate.user';
import { LoggedUser } from '../models/logged.user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {
  private readonly userStore = new BehaviorSubject<LoggedUser | undefined>(undefined);

  logIn(authUser: AuthenticateUser): Observable<LoggedUser> {
    const user: LoggedUser = {
      firstName: 'John',
      lastName: 'Doe',
      nickName: 'JohnDoe',
      token: 'abc123'
    }

    return of(user).pipe(
      delay(1000),
      tap(user => this.userStore.next(user))
    );
  }

  get isAuthenticated(): boolean {
    return this.userStore.value !== undefined;
  }

  get asObservable(): Observable<LoggedUser | undefined> {
    return this.userStore.asObservable()
  }
}
