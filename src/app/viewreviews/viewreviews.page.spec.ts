// Import the necessary testing utilities and dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewreviewsPage } from './viewreviews.page';

describe('ViewreviewsPage', () => {
    let component: ViewreviewsPage;
    let fixture: ComponentFixture<ViewreviewsPage>;

    // Before each test, configure the testing module
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IonicModule.forRoot()],
            declarations: [ViewreviewsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA], 
        }).compileComponents();

        // Create the component and initialize it
        fixture = TestBed.createComponent(ViewreviewsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // Test if the component is created successfully
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    
});
