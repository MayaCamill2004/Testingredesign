import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedProduct: any;
  private cart: any[] = [];
  private deliveryAddress: string = '';
  private paymentDetails: string = '';

  constructor() {}

  // Method to add a product to the cart
  addToCart(product: any): void {
    const existingProduct = this.cart.find((item) => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        this.cart.push({ ...product, quantity: product.quantity });
    }
}

getCart(): any[] {
    return this.cart;
}

updateQuantity(product: any, newQuantity: number): void {
    const cartProduct = this.cart.find((item) => item.title === product.title);
    if (cartProduct) {
        cartProduct.quantity = newQuantity;
    }
}


  //to set and get the selected product
  setSelectedProduct(product: any): void {
    this.selectedProduct = product;
  }

  getSelectedProduct(): any {
    return this.selectedProduct;
  }

  //  to set and get delivery address
  setAddress(address: string): void {
    this.deliveryAddress = address;
  }

  getAddress(): string {
    return this.deliveryAddress;
  }

  // to set and get payment details
  getPaymentDetails(): string {
    return this.paymentDetails;
  }

  setPaymentDetails(details: string): void {
    this.paymentDetails = details;
  }



  //  to get the quantity of a specific product in the cart
  getQuantity(product: any): number {
    const cartProduct = this.cart.find((item) => item.title === product.title);
    return cartProduct ? cartProduct.quantity : 0;
  }
}
