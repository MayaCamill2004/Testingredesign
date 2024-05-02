import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule],
      declarations: [LoginPage],
      providers: [{ provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when form is valid', () => {
    // Arrange
    const form = { valid: true } as NgForm;
    component.user.email = 'test@example.com';
    component.user.password = 'password';

    // Act
    component.onLogin(form);

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should not navigate to home when form is invalid', () => {
    // Arrange
    const form = { valid: false } as NgForm;

    // Act
    component.onLogin(form);

    // Assert
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to Spotify authorization when loginWithSpotify is called', () => {
    // Arrange
    const expectedUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=c0fa398ec1dd4976822464b88deef3e8&redirect_uri=http%3A%2F%2Flocalhost%3A8100%2Fhome&scope=user-read-private%20user-read-email`;
    
    // Spy on the helper function
    spyOn(component, 'redirectToUrl');
    
    // Act
    component.loginWithSpotify();
    
    // Assert
    expect(component.redirectToUrl).toHaveBeenCalledWith(expectedUrl);
  });
});
