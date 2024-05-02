// Import the necessary testing utilities and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { TrendingPage } from './trending.page';
import { FavoriteService } from '../favorite.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TrendingPage', () => {
    let component: TrendingPage;
    let fixture: ComponentFixture<TrendingPage>;

    beforeEach(async () => {
        // Configure the testing module
        await TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RouterTestingModule],
            declarations: [TrendingPage],
            providers: [FavoriteService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA], // This helps handle custom elements such as Ionic components
        }).compileComponents();

        // Create the component and initialize it
        fixture = TestBed.createComponent(TrendingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // Test if the component is created successfully
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test navigation methods using spies
    it('should navigate to home page', () => {
        const navSpy = spyOn(component['navCtrl'], 'navigateForward');
        component.goToHomePage();
        expect(navSpy).toHaveBeenCalledWith('/home');
    });

    it('should navigate to cart page', () => {
        const navSpy = spyOn(component['navCtrl'], 'navigateForward');
        component.goToCartPage();
        expect(navSpy).toHaveBeenCalledWith('/cart');
    });

    it('should navigate to account page', () => {
        const navSpy = spyOn(component['navCtrl'], 'navigateForward');
        component.goToAccountPage();
        expect(navSpy).toHaveBeenCalledWith('/account');
    });

    it('should navigate to search page', () => {
        const navSpy = spyOn(component['navCtrl'], 'navigateForward');
        component.goToSearchPage();
        expect(navSpy).toHaveBeenCalledWith('/search');
    });

    it('should navigate to favourites page', () => {
        const navSpy = spyOn(component['navCtrl'], 'navigateForward');
        component.goToFavouritesPage();
        expect(navSpy).toHaveBeenCalledWith('/favourites');
    });
});
