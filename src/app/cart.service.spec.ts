import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    const product = { title: 'Test Product', price: 10, quantity: 2 };
    service.addToCart(product);
    const cart = service.getCart();
    
    expect(cart.length).toBe(1);
    expect(cart[0].title).toBe('Test Product');
    expect(cart[0].price).toBe(10);
    expect(cart[0].quantity).toBe(2);
  });

  it('should update the quantity of a product in the cart', () => {
    const product = { title: 'Test Product', price: 10, quantity: 2 };
    service.addToCart(product);
    
    service.updateQuantity(product, 5);
    const cart = service.getCart();
    
    expect(cart[0].quantity).toBe(5);
  });

  it('should set and get the delivery address', () => {
    const address = '123 Test St, Test City';
    service.setAddress(address);
    
    const retrievedAddress = service.getAddress();
    expect(retrievedAddress).toBe(address);
  });

  it('should set and get the payment details', () => {
    const paymentDetails = 'Visa (****1234)';
    service.setPaymentDetails(paymentDetails);
    
    const retrievedDetails = service.getPaymentDetails();
    expect(retrievedDetails).toBe(paymentDetails);
  });

  it('should set and get the selected product', () => {
    const product = { title: 'Test Product', price: 10, quantity: 2 };
    service.setSelectedProduct(product);
    
    const retrievedProduct = service.getSelectedProduct();
    expect(retrievedProduct).toEqual(product);
  });

  it('should retrieve the quantity of a specific product in the cart', () => {
    const product = { title: 'Test Product', price: 10, quantity: 2 };
    service.addToCart(product);
    
    const quantity = service.getQuantity(product);
    expect(quantity).toBe(2);
  });

});
