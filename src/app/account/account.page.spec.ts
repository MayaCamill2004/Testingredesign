import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountPage } from './account.page';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  // Setup the testing environment
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
      declarations: [AccountPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // Test that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the address page when goToAddressPage is called', () => {
    const goToAddressPageSpy = spyOn(component, 'goToAddressPage');
    const addressItem = fixture.debugElement.query(By.css('ion-item:nth-child(2)'));
    addressItem.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(goToAddressPageSpy).toHaveBeenCalled();
});

it('should navigate to the orders page when goToOrdersPage is called', () => {
  const goToOrdersPageSpy = spyOn(component, 'goToOrdersPage');
  const ordersItem = fixture.debugElement.query(By.css('ion-item:nth-child(1)'));
  ordersItem.triggerEventHandler('click', null);
  fixture.detectChanges();
  expect(goToOrdersPageSpy).toHaveBeenCalled();
});


  // Test signOut method
  it('should navigate to the login page when signOut is called', () => {
    spyOn(component, 'signOut');
    const signOutButton = fixture.debugElement.query(By.css('ion-button[expand="block"]'));
    signOutButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.signOut).toHaveBeenCalled();
  });

  // Test handleFileInput method
  it('should handle file input correctly', () => {
    const mockEvent = {
      target: {
        files: [new Blob([''], { type: 'image/jpeg' })],
      },
    };
    spyOn(component, 'handleFileInput');
    component.handleFileInput(mockEvent);
    expect(component.handleFileInput).toHaveBeenCalled();
  });
});
