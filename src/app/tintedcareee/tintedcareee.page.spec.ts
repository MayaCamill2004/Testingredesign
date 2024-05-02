import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TintedcareeePage } from './tintedcareee.page';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoriteService } from '../favorite.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TintedcareeePage', () => {
    let component: TintedcareeePage;
    let fixture: ComponentFixture<TintedcareeePage>;
    let favoriteService: FavoriteService;

    beforeEach(async () => {
        // Configure the testing module
        await TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RouterTestingModule],
            declarations: [TintedcareeePage],
            providers: [FavoriteService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA], // This helps handle custom elements such as Ionic components
        }).compileComponents();

        // Create the component and initialize it
        fixture = TestBed.createComponent(TintedcareeePage);
        component = fixture.componentInstance;
        favoriteService = TestBed.inject(FavoriteService);

        // Initialize the component's data and view
        fixture.detectChanges();
    });

    // Test if the component is created successfully
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test the `toggleFavorite` method
    it('should toggle product favorite status correctly', () => {
        const product = component.faceSerumProducts[0];
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
