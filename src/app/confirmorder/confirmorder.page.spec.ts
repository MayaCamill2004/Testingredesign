import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmorderPage } from './confirmorder.page';

describe('ConfirmorderPage', () => {
  let component: ConfirmorderPage;
  let fixture: ComponentFixture<ConfirmorderPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmorderPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    // Create the component and inject dependencies
    fixture = TestBed.createComponent(ConfirmorderPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    // Trigger change detection
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verify that the component instance is created successfully
    expect(component).toBeTruthy();
  });

  it('should navigate to home page when "Continue Shopping" button is clicked', () => {
    // Spy on the navigate method of the router
    const navigateSpy = spyOn(router, 'navigate').and.callThrough();

    // Simulate clicking the "Continue Shopping" button
    const button = fixture.debugElement.nativeElement.querySelector('ion-button');
    button.click();

    // Expect navigation to the home page
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});
