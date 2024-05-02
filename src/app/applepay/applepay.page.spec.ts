import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ApplepayPage } from './applepay.page';
import { CartService } from '../cart.service';
import { By } from '@angular/platform-browser';

describe('ApplepayPage', () => {
  let component: ApplepayPage;
  let fixture: ComponentFixture<ApplepayPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
      declarations: [ApplepayPage],
      providers: [CartService],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplepayPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  // Test that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test navigation to the address page when changeDeliveryAddress is called
  it('should navigate to the address page when changeDeliveryAddress is called', () => {
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.changeDeliveryAddress();
    expect(navigateSpy).toHaveBeenCalledWith(['/address']);
  });

  // Test navigation to the payment method page when changePaymentType is called
  it('should navigate to the payment method page when changePaymentType is called', () => {
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.changePaymentType();
    expect(navigateSpy).toHaveBeenCalledWith(['/paymentmethod']);
  });

  // Test order confirmation and navigation to confirm order page
  it('should navigate to confirm order page when confirmOrder is called with valid promo code', () => {
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.promoCode = '1200M'; // Valid promo code
    component.confirmOrder();
    expect(navigateSpy).toHaveBeenCalledWith(['/confirmorder']);
  });

  // Test alert when an invalid promo code is entered
  it('should present alert when confirmOrder is called with invalid promo code', async () => {
    component.promoCode = 'INVALID'; // Invalid promo code
    const presentAlertSpy = spyOn(component, 'presentAlert');
    component.confirmOrder();
    expect(presentAlertSpy).toHaveBeenCalled();
  });

  // Test the calculation of subtotal
  it('should calculate the subtotal of cart items correctly', () => {
    const mockCartItems = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 4 },
    ];
    component.cartItems = mockCartItems;
    component.calculateSubTotal();
    expect(component.subTotal).toBe(40); // Expected subtotal: (10 * 2) + (5 * 4) = 40
  });

  // Test the calculation of total to pay
  it('should calculate the total to pay correctly', () => {
    component.subTotal = 50;
    component.deliveryCost = 7;
    component.calculateTotalToPay();
    expect(component.totalToPay).toBe(57); // Expected total to pay: 50 + 7 = 57
  });
});
