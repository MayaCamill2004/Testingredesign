import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FirstsignsofageingPage } from './firstsignsofageing.page';
import { FavoriteService } from '../favorite.service';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('FirstsignsofageingPage', () => {
  let component: FirstsignsofageingPage;
  let fixture: ComponentFixture<FirstsignsofageingPage>;
  let favoriteService: FavoriteService;
  let navCtrl: NavController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule],
      declarations: [FirstsignsofageingPage],
      providers: [FavoriteService, NavController],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstsignsofageingPage);
    component = fixture.componentInstance;
    favoriteService = TestBed.inject(FavoriteService);
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle like for a product', () => {
    const productIndex = 0;
    const product = component.products[productIndex];
    expect(product.isLiked).toBeFalse();

    component.toggleLike(productIndex);
    expect(product.isLiked).toBeTrue();
  });

  it('should navigate to the correct page when navigateToProductType is called', () => {
    spyOn(navCtrl, 'navigateForward');

    const event = { detail: { value: 'moisturizers' } };
    component.navigateToProductType(event);

    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/moisturizers');
  });

  it('should sort products by the selected option', () => {
    component.selectedSortOption = 'Low to high';
    component.sortProducts();

    // Check if products are sorted by price
    for (let i = 0; i < component.products.length - 1; i++) {
        // Convert prices to numbers and check if they are valid
        const price1 = Number(component.products[i].price);
        const price2 = Number(component.products[i + 1].price);

        if (!isNaN(price1) && !isNaN(price2)) {
            expect(price1).toBeLessThanOrEqual(price2);
        }
    }
});



});
