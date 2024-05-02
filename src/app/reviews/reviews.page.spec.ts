import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReviewsPage } from './reviews.page';
import { NavController, ToastController } from '@ionic/angular';

describe('ReviewsPage', () => {
  let component: ReviewsPage;
  let fixture: ComponentFixture<ReviewsPage>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;
  let navControllerSpy: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    // Create spy objects for NavController and ToastController
    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);
    navControllerSpy = jasmine.createSpyObj('NavController', ['navigateForward']);

    // Set up the TestBed
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule],
      declarations: [ReviewsPage],
      providers: [
        { provide: ToastController, useValue: toastControllerSpy },
        { provide: NavController, useValue: navControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set rating correctly when rate is called', () => {
    component.rate(3);
    expect(component.rating).toBe(3);
  });

  it('should display a toast message when submitReview is called with a rating of 0', async () => {
    // Set the rating to 0
    component.rating = 0;

    // Create a spy on the toast message creation
    const toastSpy = jasmine.createSpyObj('Toast', ['present']);
    toastControllerSpy.create.and.returnValue(Promise.resolve(toastSpy));

    // Call submitReview
    await component.submitReview();

    // Check that the correct toast message was displayed
    expect(toastControllerSpy.create).toHaveBeenCalledWith({
      message: 'Please provide a rating.',
      duration: 2000,
      position: 'bottom',
    });
    expect(toastSpy.present).toHaveBeenCalled();
  });

  it('should navigate to confirm order page when submitReview is called with a valid rating', async () => {
    // Set the rating to a valid value
    component.rating = 3;

    // Call submitReview
    await component.submitReview();

    // Check that the navigation occurred
    expect(navControllerSpy.navigateForward).toHaveBeenCalledWith('/confirmorder');
  });
});
