import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { FacecarePage } from './facecare.page';
import { FavoriteService } from '../favorite.service';
import { Router } from '@angular/router';

describe('FacecarePage', () => {
  let component: FacecarePage;
  let fixture: ComponentFixture<FacecarePage>;
  let favoriteService: FavoriteService;
  let navCtrl: NavController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacecarePage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [FavoriteService, NavController]
    }).compileComponents();

    fixture = TestBed.createComponent(FacecarePage);
    component = fixture.componentInstance;
    favoriteService = TestBed.inject(FavoriteService);
    navCtrl = TestBed.inject(NavController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to product detail page when product is clicked', () => {
    const product = component.products[0];
    spyOn(router, 'navigateByUrl');
    component.navigateToProductDetail(product);
    expect(router.navigateByUrl).toHaveBeenCalledWith(`/product-detail/${product.title.toLowerCase().split(' ').join('-')}`, { state: { product } });
  });

  it('should toggle favorite status and call the appropriate favorite service method', () => {
    const product = component.products[0];

    spyOn(favoriteService, 'addToFavorites');
    spyOn(favoriteService, 'removeFromFavorites');

    // Toggle favorite status to true
    component.toggleFavorite(product);
    expect(product.isFavorite).toBe(true);
    expect(favoriteService.addToFavorites).toHaveBeenCalledWith(product);

    // Toggle favorite status back to false
    component.toggleFavorite(product);
    expect(product.isFavorite).toBe(false);
    expect(favoriteService.removeFromFavorites).toHaveBeenCalledWith(product);
  });

  it('should sort products from low to high price correctly', () => {
    component.sortLowToHigh();
    const sortedPrices = component.products.map(product => parseFloat(product.price.replace('€', '')));
    const sortedPricesCopy = [...sortedPrices].sort((a, b) => a - b);
    expect(sortedPrices).toEqual(sortedPricesCopy);
  });

  it('should sort products from high to low price correctly', () => {
    component.sortHighToLow();
    const sortedPrices = component.products.map(product => parseFloat(product.price.replace('€', '')));
    const sortedPricesCopy = [...sortedPrices].sort((a, b) => b - a);
    expect(sortedPrices).toEqual(sortedPricesCopy);
  });

  it('should navigate to home page', () => {
    spyOn(navCtrl, 'navigateForward');
    component.goToHomePage();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/home');
  });

  it('should navigate to cart page', () => {
    spyOn(navCtrl, 'navigateForward');
    component.goToCartPage();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/cart');
  });

  it('should navigate to account page', () => {
    spyOn(navCtrl, 'navigateForward');
    component.goToAccountPage();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/account');
  });

  it('should navigate to favorites page', () => {
    spyOn(navCtrl, 'navigateForward');
    component.goToFavouritesPage();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/favourites');
  });

  it('should navigate to search page', () => {
    spyOn(navCtrl, 'navigateForward');
    component.goToSearchPage();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/search');
  });
});
