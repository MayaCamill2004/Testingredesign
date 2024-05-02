import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { CartPage } from './cart.page';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;
  let cartService: CartService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
      providers: [CartService]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart items on initialization', () => {
    const loadCartItemsSpy = spyOn(component, 'loadCartItems');
    component.ngOnInit();
    expect(loadCartItemsSpy).toHaveBeenCalled();
  });

  // Test applePay method
  it('should navigate to Apple Pay', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.applePay();
    expect(navigateSpy).toHaveBeenCalledWith(['/applepay']);
  });

  // Test increaseQuantity method
  it('should increase quantity of an item', () => {
    const item = { quantity: 1 };
    component.increaseQuantity(item);
    expect(item.quantity).toBe(2);
  });

  // Test decreaseQuantity method
  it('should decrease quantity of an item', () => {
    const item = { quantity: 2 };
    component.decreaseQuantity(item);
    expect(item.quantity).toBe(1);
  });

  // Test deleteFromCart method
  it('should delete item from cart', () => {
    const item = { title: 'Test Item', quantity: 1 };
    component.cartItems = [item];
    component.deleteFromCart(item);
    expect(component.cartItems.length).toBe(0);
  });

  // Test checkout method
  it('should navigate to checkout page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.checkout();
    expect(navigateSpy).toHaveBeenCalledWith(['/checkoutm'], {
      state: { cartItems: cartService.getCart() }
    });
  });
});
