import { Injectable } from '@angular/core';
import { Order } from './order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  recentOrder: Order | null = null;

  constructor() { }

  // Method to add a new order
  addOrder(order: Order) {
    this.recentOrder = order;
  }

  // Method to get the recent order
  getRecentOrder(): Order | null {
    return this.recentOrder;
  }
}
