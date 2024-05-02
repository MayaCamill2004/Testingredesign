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
  selector: 'app-facecare',
  templateUrl: './facecare.page.html',
  styleUrls: ['./facecare.page.scss'],
})
export class FacecarePage implements OnInit {
  products: Product[] = [

    { image: 'assets/single.png', title: '9-Ingredient Face Moisturiser', description: '99% naturally derived. Vegan. Made in France.', price: '€22.50', quantity: '1', isFavorite: false},
    { image: 'assets/single.png', title: 'Purifying Moisturiser', description: 'with 4% Zinc PCA + Bamboo Extract', price: ' €27.90' ,quantity: '1', isFavorite: false},
    { image: 'assets/single.png', title: 'Nourishing moisturiser', description: '1% Hyaluronic Acid + Shea Butter', price: '€27.90', quantity: '1', isFavorite: false },
    { image: 'assets/single.png', title: 'Firming Moisturiser', description: '  0.2% Retinol + Tsubaki Oil', price: '€30.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/nightcare1.png', title: 'Organic Prickly Pear', description: 'Botanical Oil', price: '  €18.90',quantity: '1', isFavorite: false },
    { image: 'assets/nightcare2.png', title: 'Botanical Blend for Sensitive Skin', description: 'with 650 mg CBD ', price: '€41.90',quantity: '1',isFavorite: false },
    { image: 'assets/nightcare3.png', title: 'Firming night mask', description: 'with organic prickly pear oil ', price: '€36.50' ,quantity: '1',isFavorite: false},
    { image: 'assets/nightcare4.png', title: 'Tanned complexion serum', description: ' Botanical blend with buriti ', price: 'from €24.90', quantity: '1',isFavorite: false},
    { image: 'assets/duo.png', title: 'Tinted duo', description: 'with 650 mg CBD ', price: '£41.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/instantduo.png', title: 'The Tinted Glow Duo ', description: 'Tint and illuminate. ', price: ' €52.40', quantity: '1',isFavorite: false },
    { image: 'assets/softtint.png', title: 'Tanned complexion serum', description: ' Botanical blend with buriti ', price: 'from €24.90', quantity: '1',isFavorite: false },
    { image: 'assets/three.png', title: 'Tinted Trio', description: 'Our three bestselling tinted formulations for a natural', price: '€76.50' , quantity: '1', isFavorite: false},
    { image: 'assets/tintedcomplexion.png', title: 'Tinted complexion duo', description: ' Formulated with actives like vitamin C and aloe vera', price: '€80.90' ,quantity: '1', isFavorite: false},
      
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
    sortLowToHigh() {
      this.products.sort((a, b) => parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', '')));
    }
    
    sortHighToLow() {
      this.products.sort((a, b) => parseFloat(b.price.replace('€', '')) - parseFloat(a.price.replace('€', '')));
    }
    
  }
  
  