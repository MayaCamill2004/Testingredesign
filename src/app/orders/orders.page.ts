import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'; // Ensure the path is correct
import { Order } from '../order.interface'; // Ensure the path is correct
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  recentOrder: Order | null = null; 

  constructor(private orderService: OrderService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadRecentOrder();
  }

  loadRecentOrder() {
    const order = this.orderService.getRecentOrder();
    if (order) {
      this.recentOrder = order;
    } else {
      console.error('No recent order found');
    
    }
  }
  
}
