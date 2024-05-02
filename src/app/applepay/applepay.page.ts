import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-applepay',
  templateUrl: './applepay.page.html',
  styleUrls: ['./applepay.page.scss'],
})
export class ApplepayPage {
  // Array to store items in the cart
  cartItems: any[] = [];
  // Promo code to be entered by the user
  promoCode: string = '';
  // Selected delivery address
  selectedDeliveryAddress: string = '';
  // Selected delivery option
  selectedDeliveryOption: string = 'standard';
  // Selected payment type
  selectedPaymentType: string = '';
  // Subtotal cost of items in the cart
  subTotal: number = 0;
  // delivery cost
  deliveryCost: number = 7;
  // Total to pay, including subtotal and delivery cost
  totalToPay: number = 0;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
  ) {}


  ionViewWillEnter() {
    // Load cart items from the cart service
    this.cartItems = this.cartService.getCart();
    // Load selected delivery address from the cart service
    this.selectedDeliveryAddress = this.cartService.getAddress();
    // Load selected payment type from the cart service
    this.selectedPaymentType = this.cartService.getPaymentDetails();
    // Calculate the subtotal and total to pay
    this.calculateSubTotal();
    this.calculateTotalToPay();
  }

  // alert when an invalid promo code is entered
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Promo Code',
      message: 'The promo code you entered is not valid. Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Confirm the order and navigate to the confirmation page
  confirmOrder() {
    // If there is no promo code or the promo code is valid
    if (!this.promoCode || this.validatePromoCode()) {
      this.router.navigate(['/confirmorder']);
    } else {
      // Show alert if the promo code is invalid
      this.presentAlert();
    }
  }

  // Navigate to the payment method selection page
  changePaymentType() {
    this.router.navigate(['/paymentmethod']);
  }

  // Navigate to the address selection page
  changeDeliveryAddress() {
    this.router.navigate(['/address']);
  }

  // Validate the promo code entered by the user
  private validatePromoCode(): boolean {
    // Check if the promo code matches '1200M'
    return this.promoCode.trim().toUpperCase() === '1200M';
  }

  // Calculate the total amount to pay (subtotal + delivery cost)
  calculateTotalToPay(): void {
    this.totalToPay = this.subTotal + this.deliveryCost;
  }

  // Calculate the subtotal cost of items in the cart
  calculateSubTotal(): number {
    this.subTotal = this.cartItems.reduce((total, item) => {
      // Sum the total cost of each item in the cart 
      return total + (item.price * item.quantity);
    }, 0);
    return this.subTotal;
  }
}
