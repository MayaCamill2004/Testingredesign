import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  
  goToHomePage() {
    this.navigateTo('/home');
  }

  goToFavouritesPage() {
    this.navigateTo('/favourites');
  }

  navigateToTintedCareeePage() {
    this.navigateTo('/tintedcareee');
  }

  navigateToTrending() {
    this.navigateTo('/trending');
  }

  goToSearchPage() {
    this.navigateTo('/search');
  }

  goToCartPage() {
    this.navigateTo('/cart'); 
  }

  goToAccountPage() {
    this.navigateTo('/account'); 
  }
  
  navigateToBodyCarePage() {
    this.navCtrl.navigateForward('/bodycare'); 
  }

  navigateToSkinAgeingPage() {
    this.navCtrl.navigateForward('/skinageing'); 
  }
  navigateToByConcernPage() {
    this.navCtrl.navigateForward('/byconcern'); 
  }


  
navigateToFaceCarePage() {
  console.log('Navigating to face care page');
  this.navCtrl.navigateForward('/facecare');
}
beginDiagnosticTest() {
  this.navCtrl.navigateForward('/diagnostic-step-one');
}


  private navigateTo(page: string) {
    this.navCtrl.navigateForward(page)
      .catch(error => console.error(`Navigation failed: ${error}`));
  }
}
