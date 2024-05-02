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
  selector: 'app-skinageing',
  templateUrl: './skinageing.page.html',
  styleUrls: ['./skinageing.page.scss'],
})
export class SkinageingPage  implements OnInit {
  products: Product[] = [

    { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5 ', price: '€15.50',quantity: '1', isFavorite: false},
    { image: 'assets/serum.png', title: 'Serum for Wrinkles and Loss of Firmness ', description: '1% Plant Collagen + 10% Vitamin C', price: '€56.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/Antioxidant.png', title: 'Antioxidant Moisturizer', description: 'with Carotenoids + Organic Lavender Extract', price: '€51.00', quantity: '1',isFavorite: false},
    { image: 'assets/SPF 50 Face Sunscreen.png', title: 'SPF 50 Face Sunscreen', description: 'with Hyaluronic Acid + Aloe Vera ', price: '€49.40',quantity: '1', isFavorite: false},
    { image: 'assets/single.png', title: 'Firming Moisturiser', description: '  0.2% Retinol + Tsubaki Oil', price: '€30.90' ,quantity: '1',isFavorite: false},
    { image: 'assets/nightcare1.png', title: 'Organic Prickly Pear', description: 'Botanical Oil', price: '  €18.90',quantity: '1', isFavorite: false },
    { image: 'assets/nightcare2.png', title: 'Botanical Blend for Sensitive Skin', description: 'with 650 mg CBD ', price: '€41.90',quantity: '1',isFavorite: false },
    { image: 'assets/nightcare3.png', title: 'Firming night mask', description: 'with organic prickly pear oil ', price: '€36.50' ,quantity: '1',isFavorite: false},

   
      
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
  
  
