import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoriteService } from '../favorite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tintedcareee',
  templateUrl: './tintedcareee.page.html',
  styleUrls: ['./tintedcareee.page.scss'],
})

export class TintedcareeePage implements OnInit {
  faceSerumProducts = [
      { image: 'assets/Hydratingserum.png', title: 'Hydrating Serum', description: 'with 11% Vitamin C', price: '€15.90',quantity: '1', isFavorite: false },
      { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5 ', price: '€15.50',quantity: '1', isFavorite: false },
      { image: 'assets/tannedcomplecionserum.png', title: 'Tanned complexion serum', description: 'Botanical blend with buriti', price: '€24.90',quantity: '1', isFavorite: false },
      { image: 'assets/threeserums.png', title: 'Trio of serums', description: 'Dry skin', price: '€51.00', quantity: '1',isFavorite: false },
      { image: 'assets/trio.png', title: 'The TEN Essentials Trio', description: 'TEN essentials ', price: '€49.40',quantity: '1', isFavorite: false },
    ];
  

  favorites: any[] = [];

 constructor(
    private navCtrl: NavController,
    private favoriteService: FavoriteService,
    private router: Router 
  ) {}



  ngOnInit() {}
  navigateToProductDetail(product: any) {
    this.router.navigateByUrl(`/product-detail/${product.title.toLowerCase().split(' ').join('-')}`, {
      state: { product }
    });
  }

  goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }

  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }

  goToCartPage() {
    this.navCtrl.navigateForward('/cart'); 
  }
  
  goToAccountPage() {
    this.navCtrl.navigateForward('/account'); 
  }
  goToSearchPage() {
    this.navCtrl.navigateForward('/search'); 
  }

  toggleFavorite(product: any) {
    product.isFavorite = !product.isFavorite;
    if (product.isFavorite) {
      this.favoriteService.addToFavorites(product);
    } else {
      this.favoriteService.removeFromFavorites(product);
    }
  }
  
}

