import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressPage } from './address.page';
import { IonicModule } from '@ionic/angular';

describe('AddressPage', () => {
    let component: AddressPage;
    let fixture: ComponentFixture<AddressPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AddressPage],
            imports: [FormsModule, RouterTestingModule, IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(AddressPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should confirm address and navigate to checkout', () => {
        // Set form values
        component.firstName = 'John';
        component.lastName = 'Doe';
        component.mobile = '1234567890';
        component.selectedCountry = 'US';
        component.address = '123 Main St';
        component.townCity = 'Anytown';
        component.postcode = 'ABC123';

        // Get the Router service
        const router = TestBed.inject(Router);

        // Spy on Router.navigate method
        spyOn(router, 'navigate');

        // Call confirmAddress method
        component.confirmAddress();

        // Expect fullAddress to be set correctly
        expect(component.fullAddress).toBe(
            'John, Doe, 1234567890, US, 123 Main St, Anytown, ABC123'
        );

        // Expect navigation to checkout page
        expect(router.navigate).toHaveBeenCalledWith(['/checkoutm']);
    });
});
