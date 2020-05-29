import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  theme = 'dark';

  themeToggle(): void {
    const objLink = document.getElementById('global-theme-link');
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    if (objLink) {
      const cssExt = '.css';
      const cssFilename = this.theme + '-theme' + cssExt;
      objLink.setAttribute('href', cssFilename);
    }



    const objLinkHeader = document.getElementById('header-theme-link');

    if (objLinkHeader) {
      const cssExt = '.css';
      const cssFilename = 'header-' + this.theme + '-theme' + cssExt;
      objLinkHeader.setAttribute('href', cssFilename);
    }
  }
}
