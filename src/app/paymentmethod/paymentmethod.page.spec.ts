import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaymentmethodPage } from './paymentmethod.page';

describe('PaymentmethodPage', () => {
  let component: PaymentmethodPage;
  let fixture: ComponentFixture<PaymentmethodPage>;
  let router: Router;
  let alertController: AlertController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentmethodPage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [Router, AlertController]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentmethodPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  }));

  it('should create the PaymentmethodPage component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.cardTitle).toBe('');
    expect(component.cardNumber).toBe('');
    expect(component.expiryDate).toBe('');
    expect(component.cardHolderName).toBe('');
    expect(component.cvv).toBe('');
    expect(component.formSubmitted).toBe(true); 
});


  it('should validate form with correct values', () => {
    component.cardTitle = 'My Card';
    component.cardNumber = '1234567812345678';
    component.expiryDate = '12/25';
    component.cardHolderName = 'John Doe';
    component.cvv = '123';
    expect(component.validateForm()).toBeTrue();
  });

  it('should not validate form with incorrect values', () => {
    // Invalid card number
    component.cardNumber = '12345';
    expect(component.validateForm()).toBeFalse();
    
    // Invalid CVV
    component.cardNumber = '1234567812345678';
    component.cvv = '12';
    expect(component.validateForm()).toBeFalse();
    
    // Invalid expiry date
    component.expiryDate = '12/10';
    expect(component.validateForm()).toBeFalse();
  });

  it('should save default payment method to local storage', () => {
    const spy = spyOn(localStorage, 'setItem');
    component.cardTitle = 'My Card';
    component.cardNumber = '1234567812345678';
    component.expiryDate = '12/25';
    component.cardHolderName = 'John Doe';
    component.cvv = '123';
    component.saveDefaultPaymentMethod();
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('defaultPayment', jasmine.any(String));
  });

  it('should navigate to /checkoutm on form submission with valid data', () => {
    const spy = spyOn(router, 'navigate');
    component.cardTitle = 'My Card';
    component.cardNumber = '1234567812345678';
    component.expiryDate = '12/25';
    component.cardHolderName = 'John Doe';
    component.cvv = '123';
    component.submitCardDetails();
    
    expect(spy).toHaveBeenCalledWith(['/checkoutm']);
  });

  it('should present an alert when form validation fails', async () => {
    const spy = spyOn(component, 'presentAlert');
    component.cardTitle = '';
    component.cardNumber = '12345';
    component.submitCardDetails();
    
    await fixture.whenStable();
    expect(spy).toHaveBeenCalled();
  });
});
