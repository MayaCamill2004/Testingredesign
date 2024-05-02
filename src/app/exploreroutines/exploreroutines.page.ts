import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exploreroutines',
  templateUrl: './exploreroutines.page.html',
  styleUrls: ['./exploreroutines.page.scss'],
})
export class ExploreroutinesPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }

  goToSearchPage() {
    this.navCtrl.navigateForward('/search');
  }

  goToFavouritesPage() {
    this.navCtrl.navigateForward('/favourites');
  }

  goToAccountPage() {
    this.navCtrl.navigateForward('/account');
  }
}
