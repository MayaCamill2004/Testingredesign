import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  
  selectedProduct: any;

  constructor(
    private cartService: CartService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectedProduct = this.cartService.getSelectedProduct();
    this.loadCartItems(); // Ensure this method is declared
  }

  public loadCartItems() {
    this.cartItems = this.cartService.getCart().map(item => ({ ...item, quantity: 1 }));
}

  applePay() {
    this.router.navigate(['/applepay']);
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  deleteFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.cartService.updateQuantity(item, 0);
}


  checkout() {
    this.router.navigate(['/checkoutm'], { state: { cartItems: this.cartService.getCart() } });
  }
  
}