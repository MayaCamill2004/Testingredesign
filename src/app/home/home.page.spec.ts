import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { NavController } from '@ionic/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let navController: NavController;

    beforeEach(async () => {
        // Setup TestBed with required dependencies
        await TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
        }).compileComponents();

        // Create the component and inject dependencies
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        navController = TestBed.inject(NavController);

        // Trigger change detection
        fixture.detectChanges();
    });

    it('should create', () => {
        // Verify that the component instance is created successfully
        expect(component).toBeTruthy();
    });

    // Test navigation to home page
    it('should navigate to home page when goToHomePage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.goToHomePage();
        expect(navigateSpy).toHaveBeenCalledWith('/home');
    });

    // Test navigation to favourites page
    it('should navigate to favourites page when goToFavouritesPage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.goToFavouritesPage();
        expect(navigateSpy).toHaveBeenCalledWith('/favourites');
    });

    // Test navigation to search page
    it('should navigate to search page when goToSearchPage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.goToSearchPage();
        expect(navigateSpy).toHaveBeenCalledWith('/search');
    });

    // Test navigation to account page
    it('should navigate to account page when goToAccountPage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.goToAccountPage();
        expect(navigateSpy).toHaveBeenCalledWith('/account');
    });

    // Test navigation to cart page
    it('should navigate to cart page when goToCartPage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.goToCartPage();
        expect(navigateSpy).toHaveBeenCalledWith('/cart');
    });

    // Test navigation to tinted care page
    it('should navigate to tinted care page when navigateToTintedCareeePage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.navigateToTintedCareeePage();
        expect(navigateSpy).toHaveBeenCalledWith('/tintedcareee');
    });

    // Test navigation to trending page
    it('should navigate to trending page when navigateToTrending is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.navigateToTrending();
        expect(navigateSpy).toHaveBeenCalledWith('/trending');
    });

    // Test navigation to face care page
    it('should navigate to face care page when navigateToFaceCarePage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.navigateToFaceCarePage();
        expect(navigateSpy).toHaveBeenCalledWith('/facecare');
    });

    // Test navigation to body care page
    it('should navigate to body care page when navigateToBodyCarePage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.navigateToBodyCarePage();
        expect(navigateSpy).toHaveBeenCalledWith('/bodycare');
    });

    // Test navigation to skin ageing page
    it('should navigate to skin ageing page when navigateToSkinAgeingPage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.navigateToSkinAgeingPage();
        expect(navigateSpy).toHaveBeenCalledWith('/skinageing');
    });

    // Test navigation to by concern page
    it('should navigate to by concern page when navigateToByConcernPage is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.navigateToByConcernPage();
        expect(navigateSpy).toHaveBeenCalledWith('/byconcern');
    });

    // Test navigation for diagnostic test
    it('should navigate to diagnostic test page when beginDiagnosticTest is called', () => {
        const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
        component.beginDiagnosticTest();
        expect(navigateSpy).toHaveBeenCalledWith('/diagnostic-step-one');
    });
});
