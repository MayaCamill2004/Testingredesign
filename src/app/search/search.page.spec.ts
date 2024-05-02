import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;
  let router: Router;

  beforeEach(async () => {
    // Set up the TestBed
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule],
      declarations: [SearchPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter search suggestions based on search term', () => {
    // Set the search term
    component.searchTerm = 'body';

    // Call the onSearch method
    component.onSearch();

    // Verify that the searchSuggestions array is filtered correctly
    expect(component.searchSuggestions).toEqual(['bodycare']);
    expect(component.showSuggestions).toBe(true);
  });

  it('should clear search suggestions when search term is empty', () => {
    // Set the search term
    component.searchTerm = '';

    // Call the onSearch method
    component.onSearch();

    // Verify that the searchSuggestions array is empty
    expect(component.searchSuggestions.length).toBe(0);
    expect(component.showSuggestions).toBe(false);
  });

  it('should navigate to the correct route when a suggestion is selected', () => {
    // Create a spy on the router's navigate method
    const routerSpy = spyOn(router, 'navigate');

    // Select a suggestion
    const suggestion = 'bodycare';
    component.selectSuggestion(suggestion);

    // Verify that the navigate method was called with the correct arguments
    expect(routerSpy).toHaveBeenCalledWith(['/bodycare']);
  });
});
