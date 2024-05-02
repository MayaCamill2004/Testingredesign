import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  allowedSearchTerms: string[] = ['facecare', 'bodycare', 'firstsignsofageing', 'byconcern', 'skinageing', 'tintedcare', 'trending'];
  searchTerm: string = '';
  searchResults: any[] = [];
  showSuggestions: boolean = false;
  searchSuggestions: string[] = [];

  constructor(private navCtrl: NavController, private router: Router) {}

  goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }

  goToFavouritesPage() {
    this.navigateTo('/favourites');
  }

  goToSearchPage() {
    this.navigateTo('/search');
  }

  goToNewInPage() {
    this.navigateTo('/newin');
  }

  navigateToexploreroutines() {
    this.navigateTo('/exploreroutines');
  }

  private navigateTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

  onSearch() {
    const cleanedSearchTerm = this.searchTerm.toLowerCase().trim();

    if (cleanedSearchTerm) {
      this.showSuggestions = true;
      this.searchSuggestions = this.allowedSearchTerms.filter(term =>
        term.toLowerCase().startsWith(cleanedSearchTerm)
      );
    } else {
      this.showSuggestions = false;
      this.searchSuggestions = [];
    }
  }

  selectSuggestion(suggestion: string) {
    this.router.navigate([`/${suggestion.replace(' ', '-').toLowerCase()}`]);
  }
}
