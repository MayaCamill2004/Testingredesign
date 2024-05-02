import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ExploreroutinesPage } from './exploreroutines.page';
import { NavController } from '@ionic/angular';

describe('ExploreroutinesPage', () => {
    let component: ExploreroutinesPage;
    let fixture: ComponentFixture<ExploreroutinesPage>;
    let navController: NavController;

  
        beforeEach(async () => {
          // Setup TestBed with required dependencies
          await TestBed.configureTestingModule({
            declarations: [ExploreroutinesPage],
              imports: [IonicModule.forRoot(), RouterTestingModule],
          }).compileComponents();

          // Create the component and inject dependencies
          fixture = TestBed.createComponent(ExploreroutinesPage);
        component = fixture.componentInstance;
        navController = TestBed.inject(NavController);

       
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
 // Test navigation to home page
 it('should navigate to home page when goToHomePage is called', () => {
  const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
  component.goToHomePage();
  expect(navigateSpy).toHaveBeenCalledWith('/home');
});
   // Test navigation to search page
   it('should navigate to search page when goToSearchPage is called', () => {
    const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
    component.goToSearchPage();
    expect(navigateSpy).toHaveBeenCalledWith('/search');
});
   // Test navigation to favourites page
   it('should navigate to favourites page when goToFavouritesPage is called', () => {
    const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
    component.goToFavouritesPage();
    expect(navigateSpy).toHaveBeenCalledWith('/favourites');
});
 // Test navigation to account page
 it('should navigate to account page when goToAccountPage is called', () => {
  const navigateSpy = spyOn(navController, 'navigateForward').and.callThrough();
  component.goToAccountPage();
  expect(navigateSpy).toHaveBeenCalledWith('/account');
});
});
