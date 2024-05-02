import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SkinageingPage } from './skinageing.page';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoriteService } from '../favorite.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SkinageingPage', () => {
    let component: SkinageingPage;
    let fixture: ComponentFixture<SkinageingPage>;
    let favoriteService: FavoriteService;

    beforeEach(async () => {
        // Configure the testing module
        await TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RouterTestingModule],
            declarations: [SkinageingPage],
            providers: [FavoriteService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA], // This helps handle custom elements such as Ion components
        }).compileComponents();

        // Create the component and initialize it
        fixture = TestBed.createComponent(SkinageingPage);
        component = fixture.componentInstance;
        favoriteService = TestBed.inject(FavoriteService);

        // Initialize the component's data and view
        fixture.detectChanges();
    });

    // Test if the component is created successfully
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test the toggleFavorite method
    it('should toggle product favorite status correctly', () => {
        const product = component.products[0];
        expect(product.isFavorite).toBeFalse(); // Check initial state
        
        // Toggle favorite status
        component.toggleFavorite(product);
        expect(product.isFavorite).toBeTrue(); // Check after toggle
        
        // Toggle again to return to initial state
        component.toggleFavorite(product);
        expect(product.isFavorite).toBeFalse(); // Check after toggle back
    });

    // Add more tests for other methods and behaviors as needed

});
