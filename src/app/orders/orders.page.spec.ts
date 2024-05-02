import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OrdersPage } from './orders.page';
import { OrderService } from '../order.service'; 
import { Order } from '../order.interface'; 

class MockOrderService {
  // Mock recent order
  private recentOrder: Order | null = null; 

  // Method to set the recent order (this method can be used in test setup)
  setRecentOrder(order: Order | null) {
    this.recentOrder = order;
  }

  // Method to get recent order
  getRecentOrder() {
    return this.recentOrder;
  }
}


describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let orderService: OrderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersPage],
      imports: [IonicModule.forRoot()],
      providers: [
        // Provide the mock order service
        { provide: OrderService, useClass: MockOrderService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
    orderService = TestBed.inject(OrderService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load recent order on initialization', () => {
    const loadRecentOrderSpy = spyOn(component, 'loadRecentOrder').and.callThrough();
    component.ngOnInit();
    expect(loadRecentOrderSpy).toHaveBeenCalled();
    expect(component.recentOrder).toEqual(orderService.getRecentOrder());
  });

  it('should handle the absence of recent order', () => {
    spyOn(orderService, 'getRecentOrder').and.returnValue(null);
    component.ngOnInit();
    expect(component.recentOrder).toBeNull();
  });
});
