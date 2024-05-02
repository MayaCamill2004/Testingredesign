import { Injectable } from '@angular/core';

export interface Product {
  image: string;
  title: string;
  price: string;
}

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favorites: Product[] = [];

  addToFavorites(product: Product): void {
    this.favorites.push(product);
  }

  removeFromFavorites(product: Product): void {
    const index = this.favorites.findIndex((fav) => fav === product);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  getFavorites(): Product[] {
    return this.favorites;
  }
}