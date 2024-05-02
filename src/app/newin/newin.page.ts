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
  quantity:string;
}
@Component({
  selector: 'app-newin',
  templateUrl: 'newin.page.html',
  styleUrls: ['newin.page.scss'],
})
export class NewinPage implements OnInit {
  products: Product[] = [

    { image: 'assets/Hydratingserum.png', title: 'Hydrating Serum', description: 'with 11% Vitamin C', price: '€15.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5 ', price: '€15.50', quantity: '1',isFavorite: false},
    { image: 'assets/tannedcomplecionserum.png', title: 'Tanned complexion serum', description: 'Botanical blend with buriti', price: '€24.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/threeserums.png', title: 'Trio of serums', description: 'Dry skin', price: '€51.00',quantity: '1', isFavorite: false},
    { image: 'assets/trio.png', title: 'The TEN Essentials Trio', description: 'TEN essentials ', price: '€49.40',quantity: '1', isFavorite: false},
    { image: 'assets/nightcare2.png', title: 'Botanical Blend for Sensitive Skin', description: 'with 650 mg CBD ', price: '€41.90',quantity: '1',isFavorite: false },
    { image: 'assets/nightcare3.png', title: 'Firming night mask', description: 'with organic prickly pear oil ', price: '€36.50' ,quantity: '1',isFavorite: false},
    { image: 'assets/nightcare4.png', title: 'Tanned complexion serum', description: ' Botanical blend with buriti ', price: 'from €24.90',quantity: '1', isFavorite: false},
    { image: 'assets/duo.png', title: 'Tinted duo', description: 'with 650 mg CBD ', price: '€41.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/instantduo.png', title: 'The Tinted Glow Duo ', description: 'Tint and illuminate. ', price: ' €52.40', quantity: '1',isFavorite: false },
    { image: 'assets/softtint.png', title: 'Tanned complexion serum', description: ' Botanical blend with buriti ', price: 'from €24.90',quantity: '1', isFavorite: false },
  
    ];
    favorites: any[] = [];
    constructor(
      private navCtrl: NavController,
      private favoriteService: FavoriteService,
      private router: Router // Inject the Router service
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
  
    sortLowToHigh() {
      this.products.sort((a, b) => parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', '')));
  }
  
  sortHighToLow() {
      this.products.sort((a, b) => parseFloat(b.price.replace('€', '')) - parseFloat(a.price.replace('€', '')));
  }
  
  }
  
  