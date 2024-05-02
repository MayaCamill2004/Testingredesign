import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkoutm',
  templateUrl: 'checkoutm.page.html',
  styleUrls: ['checkoutm.page.scss'],
})
export class CheckoutmPage {
  cartItems: any[] = [];
  promoCode: string = '';
  selectedDeliveryAddress: string = '';
  selectedDeliveryOption: string = 'standard';
  selectedPaymentType: string = '';
  subTotal: number = 0;
  deliveryCost: number = 7; 
  totalToPay: number = 0;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    // Retrieve payment details from local storage
    const defaultPayment = localStorage.getItem('defaultPayment');
    if (defaultPayment) {
      const paymentInfo = JSON.parse(defaultPayment);
      this.selectedPaymentType = `${paymentInfo.cardTitle} (****${paymentInfo.last4Digits})`;
    }
    
    // Load cart items and delivery address from the CartService
    this.cartItems = this.cartService.getCart();
    this.selectedDeliveryAddress = this.cartService.getAddress();

    // Calculate sub-total and total to pay when the view is loaded
    this.calculateSubTotal();
    this.calculateTotalToPay();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async confirmOrder() {
    // Check for missing payment method
    if (!this.selectedPaymentType) {
        await this.presentAlert('Missing Payment Method', 'Please provide a payment method before confirming the order.');
        this.router.navigate(['/paymentmethod']);
        return;
    }


    // Check if the user has selected a payment method
    if (!this.selectedPaymentType) {
        // Show an alert and navigate to the payment method page
        await this.presentAlert('Missing Payment Method', 'Please provide a payment method before confirming the order.');
        this.router.navigate(['/paymentmethod']);
        return;
    }

    // Validate promo code and proceed to order confirmation
    if (!this.promoCode || this.validatePromoCode()) {
        this.router.navigate(['/reviews']);
    } else {
        // Show an alert if the promo code is invalid
        await this.presentAlert('Invalid Promo Code', 'The promo code you entered is not valid. Please try again.');
    }
}
  changePaymentType() {
    this.router.navigate(['/paymentmethod']);
  }

  changeDeliveryAddress() {
    this.router.navigate(['/address']);
  }

  private validatePromoCode(): boolean {
    // Check if the promo code matches '1200M'
    return this.promoCode.trim().toUpperCase() === '1200M';
  }

  calculateSubTotal(): void {
    this.subTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  calculateTotalToPay(): void {
    // Calculate total to pay 
    this.totalToPay = this.subTotal + this.deliveryCost;
  }
}
