
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoriteService, Product } from '../favorite.service';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage  {


  favorites: Product[] = [];

  constructor(private navCtrl: NavController, private favoriteService: FavoriteService, private cartService: CartService) {}
  
  ionViewDidEnter() {
    this.favorites = this.favoriteService.getFavorites();
  }
 
  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }

  goToSearchPage(): void {
    this.navCtrl.navigateForward('/search');
  }

  goToAccountPage(): void {
    this.navCtrl.navigateForward('/account');
  }

  goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }

  deleteFromFavorites(item: Product): void {
    this.favoriteService.removeFromFavorites(item);
    this.favorites = this.favoriteService.getFavorites();
  }

  navigateToTintedCare(): void {
    this.navigateTo('/tintedcare');
  }

  moveToBag(item: Product): void {
    this.cartService.addToCart(item);
    this.navCtrl.navigateForward('/cart');
  }

  private navigateTo(page: string): void {
    this.navCtrl.navigateForward(page).catch((error) => {
      console.error(`Navigation failed: ${error}`);
    });
  }
}

