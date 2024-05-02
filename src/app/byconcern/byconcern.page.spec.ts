import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByconcernPage } from './byconcern.page';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { FavoriteService } from '../favorite.service';
import { Product } from './byconcern.page';
import { By } from '@angular/platform-browser';

describe('ByconcernPage', () => {
  let component: ByconcernPage;
  let fixture: ComponentFixture<ByconcernPage>;
  let favoriteService: FavoriteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByconcernPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [FavoriteService]
    }).compileComponents();

    fixture = TestBed.createComponent(ByconcernPage);
    component = fixture.componentInstance;
    favoriteService = TestBed.inject(FavoriteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to product detail page', () => {
    const product: Product = {
      image: 'assets/test-image.png',
      title: 'Test Product',
      description: 'Test Description',
      price: '€10.00',
      isFavorite: false,
      quantity: '1'
    };
    const routerSpy = spyOn(component['router'], 'navigateByUrl');
    component.navigateToProductDetail(product);
    expect(routerSpy).toHaveBeenCalledWith(`/product-detail/test-product`, {
      state: { product }
    });
  });

  it('should toggle favorite status of a product', () => {
    const product: Product = {
      image: 'assets/test-image.png',
      title: 'Test Product',
      description: 'Test Description',
      price: '€10.00',
      isFavorite: false,
      quantity: '1'
    };

    spyOn(favoriteService, 'addToFavorites');
    spyOn(favoriteService, 'removeFromFavorites');

    component.toggleFavorite(product);

    expect(product.isFavorite).toBeTrue();
    expect(favoriteService.addToFavorites).toHaveBeenCalledWith(product);

    component.toggleFavorite(product);

    expect(product.isFavorite).toBeFalse();
    expect(favoriteService.removeFromFavorites).toHaveBeenCalledWith(product);
  });

  it('should sort products by price from low to high', () => {
    const products = [
      { price: '€15.90' },
      { price: '€10.50' },
      { price: '€12.00' }
    ] as Product[];

    component.products = products;
    component.sortLowToHigh();

    const expected = [
      { price: '€10.50' },
      { price: '€12.00' },
      { price: '€15.90' }
    ] as Product[];

    expect(component.products).toEqual(expected);
  });

  it('should sort products by price from high to low', () => {
    const products = [
      { price: '€15.90' },
      { price: '€10.50' },
      { price: '€12.00' }
    ] as Product[];

    component.products = products;
    component.sortHighToLow();

    const expected = [
      { price: '€15.90' },
      { price: '€12.00' },
      { price: '€10.50' }
    ] as Product[];

    expect(component.products).toEqual(expected);
  });

});
