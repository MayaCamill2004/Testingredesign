import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SignupPage } from './signup.page';
import { NavController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupPage', () => {
    let component: SignupPage;
    let fixture: ComponentFixture<SignupPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule],
            declarations: [SignupPage],
            providers: [NavController],
        }).compileComponents();

        fixture = TestBed.createComponent(SignupPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
