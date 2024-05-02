

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoriteService } from '../favorite.service';
import { Router } from '@angular/router';

interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  isFavorite: boolean; 
  quantity: string;
}

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {
  products: Product[] = [

    { image: 'assets/Tinted Care.png', title: 'Tinted Care Gift Set', description: 'A routine of tinted care for skin, lips, and lashes. Includes four bestselling formulations.', price: '€83.50',quantity: '1',isFavorite: false},
    { image: 'assets/Travel kit.png', title: 'Travel kit', description: 'Five travel-size products for a complete face care routine.', price: ' €80.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/Periodic serums.png', title: 'Periodic serums', description: 'A set of four serums to meet the complex needs..', price: '€51.90',quantity: '1', isFavorite: false },
    { image: 'assets/Antioxidant Trio.png', title: 'Antioxidant Trio', description: ' Our skin is constantly exposed to free radicals.', price: '€84.90' ,quantity: '1',isFavorite: false},
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
  
  