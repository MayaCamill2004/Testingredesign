
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmorder',
  templateUrl: 'confirmorder.page.html',
  styleUrls: ['confirmorder.page.scss'],
})
export class ConfirmorderPage {

  constructor(private router: Router) {}

  continueShopping() {
    this.router.navigate(['home']);
  }
}
