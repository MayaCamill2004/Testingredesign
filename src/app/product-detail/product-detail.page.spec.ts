import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ProductDetailPage } from './product-detail.page';
import { CartService } from '../cart.service';

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;
  let cartService: CartService;
  let router: Router;

  beforeEach(async () => {
    // Set up the testing module
    await TestBed.configureTestingModule({
      declarations: [ProductDetailPage],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
            snapshot: {
              queryParams: {}
            }
          }
        },
        CartService
      ]
    }).compileComponents();

    // Create component and fixture
    fixture = TestBed.createComponent(ProductDetailPage);
    component = fixture.componentInstance;

    // Get instances of injected services
    cartService = TestBed.inject(CartService);
    router = TestBed.inject(Router);

    // Initialize the component
    fixture.detectChanges();
  });

  // Test that the component initializes properly
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test addToBag method
  it('should add product to bag and navigate to cart page', () => {
    const product = { id: 1, title: 'Test Product', price: 10 };
    const addToCartSpy = spyOn(cartService, 'addToCart');
    const navigateSpy = spyOn(router, 'navigate');

    // Call addToBag method
    component.addToBag(product);
    expect(addToCartSpy).toHaveBeenCalledWith(product);
    expect(navigateSpy).toHaveBeenCalledWith(['/cart'], { state: { product: product } });
  });

  // Test toggleDescription method
  it('should toggle description visibility', () => {
    expect(component.showDescription).toBeFalse();
    component.toggleDescription();
    expect(component.showDescription).toBeTrue();
    component.toggleDescription();
    expect(component.showDescription).toBeFalse();
  });


});
