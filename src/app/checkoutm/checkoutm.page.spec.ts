import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, AlertController } from '@ionic/angular';
import { CheckoutmPage } from './checkoutm.page';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('CheckoutmPage', () => {
  let component: CheckoutmPage;
  let fixture: ComponentFixture<CheckoutmPage>;
  let cartService: CartService;
  let alertController: AlertController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutmPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
      providers: [CartService, AlertController],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutmPage);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    alertController = TestBed.inject(AlertController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate sub-total and total-to-pay on view load', async () => {
    cartService.addToCart({ title: 'Item 1', price: 10, quantity: 2 });
    cartService.addToCart({ title: 'Item 2', price: 5, quantity: 3 });

    // Trigger view load
    await component.ionViewWillEnter();

    // Verify sub-total and total-to-pay calculations
    expect(component.subTotal).toBe(35);
    expect(component.totalToPay).toBe(42); // subTotal + deliveryCost
  });
  it('should navigate to payment method page when payment is missing', async () => {
    spyOn(component, 'presentAlert').and.callThrough();
    spyOn(router, 'navigate');

    component.selectedPaymentType = '';

    await component.confirmOrder();

    expect(component.presentAlert).toHaveBeenCalledWith('Missing Payment Method', 'Please provide a payment method before confirming the order.');
    expect(router.navigate).toHaveBeenCalledWith(['/paymentmethod']);
  });

 

  it('should navigate to reviews page if order is confirmed', async () => {
    spyOn(router, 'navigate');

    component.selectedDeliveryAddress = 'Test Address';
    component.selectedPaymentType = 'Test Payment';
    component.promoCode = '1200M';

    await component.confirmOrder();

    expect(router.navigate).toHaveBeenCalledWith(['/reviews']);
  });

  it('should display an alert for invalid promo code', async () => {
    spyOn(component, 'presentAlert').and.callThrough();

    component.selectedDeliveryAddress = 'Test Address';
    component.selectedPaymentType = 'Test Payment';
    component.promoCode = 'INVALID';

    await component.confirmOrder();

    expect(component.presentAlert).toHaveBeenCalledWith('Invalid Promo Code', 'The promo code you entered is not valid. Please try again.');
  });

  it('should calculate sub-total correctly', () => {
    // Add test items to the cart
    component.cartItems = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 }
    ];

    component.calculateSubTotal();

    // Verify the sub-total calculation
    expect(component.subTotal).toBe(35);
  });

  it('should calculate total-to-pay correctly', () => {
    component.subTotal = 35;
    component.deliveryCost = 7;

    component.calculateTotalToPay();

    // Verify the total-to-pay calculation
    expect(component.totalToPay).toBe(42); // subTotal + deliveryCost
  });
});
