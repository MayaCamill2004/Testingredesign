import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavController } from '@ionic/angular';
import { By } from '@angular/platform-browser';

import { NewinPage } from './newin.page';
import { FavoriteService } from '../favorite.service';

describe('NewinPage', () => {
  let component: NewinPage;
  let fixture: ComponentFixture<NewinPage>;
  let navCtrl: NavController;
  let favoriteService: FavoriteService;

  beforeEach(async () => {
    // Set up the testing module
    await TestBed.configureTestingModule({
      declarations: [NewinPage],
      imports: [FormsModule, RouterTestingModule],
      providers: [NavController, FavoriteService]
    }).compileComponents();

    // Create component and fixture
    fixture = TestBed.createComponent(NewinPage);
    component = fixture.componentInstance;

    // Get instances of injected services
    navCtrl = TestBed.inject(NavController);
    favoriteService = TestBed.inject(FavoriteService);

    // Initialize the component
    fixture.detectChanges();
  });

  // Test that the component initializes properly
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test navigation methods
  it('should navigate to home page', () => {
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.goToHomePage();
    expect(navigateSpy).toHaveBeenCalledWith('/home');
  });

  it('should navigate to favourites page', () => {
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.goToFavouritesPage();
    expect(navigateSpy).toHaveBeenCalledWith('/favourites');
  });

  it('should navigate to cart page', () => {
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.goToCartPage();
    expect(navigateSpy).toHaveBeenCalledWith('/cart');
  });

  it('should navigate to account page', () => {
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.goToAccountPage();
    expect(navigateSpy).toHaveBeenCalledWith('/account');
  });

  it('should navigate to search page', () => {
    const navigateSpy = spyOn(navCtrl, 'navigateForward');
    component.goToSearchPage();
    expect(navigateSpy).toHaveBeenCalledWith('/search');
  });

  // Test product detail navigation
  it('should navigate to product detail', () => {
    const product = { title: 'Product Title' };
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');

    component.navigateToProductDetail(product);

    expect(navigateSpy).toHaveBeenCalledWith(`/product-detail/product-title`, {
      state: { product }
    });
  });

  // Test toggleFavorite method
  it('should toggle product favorite status', () => {
    const product = {
      isFavorite: false,
      title: 'Product Title',
      image: '',
      description: '',
      price: '€10.00',
      quantity: '1'
    };

    const addSpy = spyOn(favoriteService, 'addToFavorites');
    const removeSpy = spyOn(favoriteService, 'removeFromFavorites');

    component.toggleFavorite(product);

    // Check if product was added to favorites
    expect(product.isFavorite).toBeTrue();
    expect(addSpy).toHaveBeenCalledWith(product);

    // Call the method again to toggle it off
    component.toggleFavorite(product);

    // Check if product was removed from favorites
    expect(product.isFavorite).toBeFalse();
    expect(removeSpy).toHaveBeenCalledWith(product);
  });

  // Test sorting methods
  it('should sort products by price from low to high', () => {
    component.sortLowToHigh();

    const prices = component.products.map(product => parseFloat(product.price.replace('€', '')));
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
  });

  it('should sort products by price from high to low', () => {
    component.sortHighToLow();

    const prices = component.products.map(product => parseFloat(product.price.replace('€', '')));
    const sortedPrices = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(sortedPrices);
  });
});




