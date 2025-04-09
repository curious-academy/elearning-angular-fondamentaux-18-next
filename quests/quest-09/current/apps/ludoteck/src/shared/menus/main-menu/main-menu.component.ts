import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  private readonly router = inject(Router)

  goToUrl(url: string, ...optionalParams: NavigationExtras[]): void {
    this.router.navigate([url])
  }
}
