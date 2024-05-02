import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FavoriteService } from '../favorite.service';

interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-bodycare',
  templateUrl: './bodycare.page.html',
  styleUrls: ['./bodycare.page.scss'],
})
export class BodycarePage implements OnInit {
  products: Product[] = [
    // Array of product objects
    { image: 'assets/Hydratingserum.png', title: 'Hydrating Serum', description: 'with 11% Vitamin C', price: '€15.90', quantity: '1', isFavorite: false },
    { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5', price: '€15.50', quantity: '1', isFavorite: false },
    { image: 'assets/tannedcomplecionserum.png', title: 'Tanned complexion serum', description: 'Botanical blend with buriti', price: '€24.90', quantity: '1', isFavorite: false },
    // Add more products as needed
  ];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {}

  // Navigate to the product detail page
  navigateToProductDetail(product: Product) {
    const productTitle = product.title.toLowerCase().replace(/\s+/g, '-');
    this.router.navigateByUrl(`/product-detail/${productTitle}`, { state: { product } });
  }

  // Navigate to the home page
  goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }

  // Navigate to the favorites page
  goToFavouritesPage() {
    this.navCtrl.navigateForward('/favourites');
  }

  // Navigate to the cart page
  goToCartPage() {
    this.navCtrl.navigateForward('/cart');
  }

  // Navigate to the account page
  goToAccountPage() {
    this.navCtrl.navigateForward('/account');
  }

  // Navigate to the search page
  goToSearchPage() {
    this.navCtrl.navigateForward('/search');
  }

  // Toggle favorite status for a product
  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    if (product.isFavorite) {
      this.favoriteService.addToFavorites(product);
    } else {
      this.favoriteService.removeFromFavorites(product);
    }
  }

  // Sort products from low to high price
  sortLowToHigh() {
    this.products.sort((a, b) => parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', '')));
  }

  // Sort products from high to low price
  sortHighToLow() {
    this.products.sort((a, b) => parseFloat(b.price.replace('€', '')) - parseFloat(a.price.replace('€', '')));
  }
}
