import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

interface NavigationState {
  product: any; 
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any;
  showDescription: boolean = false; // Added property for description visibility

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService 
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as NavigationState;
    this.product = state?.product;

    if (!this.product) {
      this.router.navigateByUrl('/');
    }
  }

  addToBag(product: any) {
    this.router.navigate(['/cart'], { state: { product: product } });
    this.cartService.addToCart(product); 
  }
 
  goToCartPage() {
    this.router.navigate(['/cart']); 
  }
  
  goToHomePage() {
    this.router.navigate(['/home']);
  }
  
  goToFavouritesPage(): void {
    this.router.navigate(['/favourites']);
  }

  goToAccountPage(): void {
    this.router.navigate(['/account']);
  }

  goToSearchPage(): void {
    this.router.navigate(['/search']);
  }

  goToReviewsPage(): void{
    this.router.navigate(['/viewreviews']);
  }

 
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }


}
