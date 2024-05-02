import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/home']);
    }
  }

  loginWithSpotify() {
    const expectedUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=c0fa398ec1dd4976822464b88deef3e8&redirect_uri=http%3A%2F%2Flocalhost%3A8100%2Fhome&scope=user-read-private%20user-read-email`;
    this.redirectToUrl(expectedUrl);
  }

  redirectToUrl(url: string) {
    window.location.assign(url);
  }
}
