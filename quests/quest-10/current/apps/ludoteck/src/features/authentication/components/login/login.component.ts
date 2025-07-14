import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { AuthenticateUserService } from '../../services/authenticate-user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly service = inject(AuthenticateUserService)
  private readonly router = inject(Router)

  logIn(): void {
    this.service.logIn({ nickName: 'JohnDoe', password: 'password123' })
                .pipe(
                  tap(item => this.router.navigate(['jeux-videos'])),
                  tap(() => console.info('logged'))
                )
                .subscribe()
  }
}
