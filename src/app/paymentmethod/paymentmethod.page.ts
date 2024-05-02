import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.page.html',
  styleUrls: ['./paymentmethod.page.scss'],
})
export class PaymentmethodPage {
  // Component properties for form fields and form submission status
  cardTitle = '';
  cardNumber = '';
  expiryDate = '';
  cardHolderName = '';
  cvv = '';
  formSubmitted = true;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  submitCardDetails(): void {
    console.log('submitCardDetails() called');
    
    this.formSubmitted = true;
    
    if (!this.validateForm()) {
      console.log('Form validation failed');
      return;
    }
  
    console.log('Card details submitted:', {
      cardTitle: this.cardTitle,
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      cardHolderName: this.cardHolderName,
      cvv: this.cvv,
    });
  
    this.saveDefaultPaymentMethod();
  
    console.log('Navigating to /checkoutm');
    this.router.navigate(['/checkoutm']);
  }

  
  /**
   * Validates the form data.
   * @returns True if the form is valid, otherwise False.
   */
  validateForm(): boolean {
    // Check for required fields
    if (!this.cardTitle || !this.cardNumber || !this.expiryDate || !this.cardHolderName || !this.cvv) {
      this.presentAlert('All fields are required.');
      return false;
    }

    // Validate card number (it must contain 12 to 19 numeric digits)
    if (!/^\d{12,19}$/.test(this.cardNumber)) {
      this.presentAlert('Card number must contain between 12 and 19 numeric digits.');
      return false;
    }

    // Validate CVV (it must contain 3 or 4 numeric digits)
    if (!/^\d{3,4}$/.test(this.cvv)) {
      this.presentAlert('CVV must contain 3 or 4 numeric digits.');
      return false;
    }

    // Validate expiry date
    if (!this.validateExpiryDate()) {
      this.presentAlert('Invalid expiry date format or expired card.');
      return false;
    }

    return true;
  }

  /**
   * Validates the expiry date of the card.
   * @returns True if the expiry date is valid, otherwise False.
   */
  validateExpiryDate(): boolean {
    const [month, year] = this.expiryDate.split('/');
    if (!/^\d{2}$/.test(month) || !/^\d{2}$/.test(year)) {
      return false;
    }

    const cardMonth = parseInt(month, 10);
    const cardYear = parseInt(year, 10);
    
    // Validate month range and year
    if (cardMonth < 1 || cardMonth > 12) {
      return false;
    }

    const currentYear = new Date().getFullYear() % 100; // Get last 2 digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Current month (1-12)

    // Card year and month checks
    if (cardYear < currentYear || (cardYear === currentYear && cardMonth < currentMonth)) {
      return false;
    }

    return true;
  }

  /**
   * Saves the default payment method in local storage.
   */
  saveDefaultPaymentMethod(): void {
    const defaultPayment = {
        cardTitle: this.cardTitle,
        last4Digits: this.cardNumber.toString().slice(-4), 
        expiryDate: this.expiryDate,
        cardHolderName: this.cardHolderName,
    };

  

    // Store the default payment method in local storage
    localStorage.setItem('defaultPayment', JSON.stringify(defaultPayment));
  }

  /**
   * Presents an alert with a given message.
   * @param message - The message to display in the alert.
   */
  async presentAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
