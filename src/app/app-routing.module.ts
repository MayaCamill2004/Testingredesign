import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',  // Redirect to the login page when the app starts
    pathMatch: 'full'
  },

  {
    path: 'facecare',
    loadChildren: () => import('./facecare/facecare.module').then(m => m.FacecarePageModule)
  },
  { 
    path: 'product-detail/:title', 
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'checkoutm',
    loadChildren: () => import('./checkoutm/checkoutm.module').then( m => m.CheckoutmPageModule)
  },
  {
    path: 'confirmorder',
    loadChildren: () => import('./confirmorder/confirmorder.module').then( m => m.ConfirmorderPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'bodycare',
    loadChildren: () => import('./bodycare/bodycare.module').then( m => m.BodycarePageModule)
  },
  {
    path: 'facecare',
    loadChildren: () => import('./facecare/facecare.module').then( m => m.FacecarePageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('./applepay/applepay.module').then( m => m.ApplepayPageModule)
  },
  {
    path: 'newin',
    loadChildren: () => import('./newin/newin.module').then( m => m.NewinPageModule)
  },
  
  {
    path: 'trending',
    loadChildren: () => import('./trending/trending.module').then( m => m.TrendingPageModule)
  },
  {
    path: 'tintedcareee',
    loadChildren: () => import('./tintedcareee/tintedcareee.module').then( m => m.TintedcareeePageModule)
  },
  {
    path: 'skinageing',
    loadChildren: () => import('./skinageing/skinageing.module').then( m => m.SkinageingPageModule)
  },
  {
    path: 'paymentmethod',
    loadChildren: () => import('./paymentmethod/paymentmethod.module').then( m => m.PaymentmethodPageModule)
  },

  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'byconcern',
    loadChildren: () => import('./byconcern/byconcern.module').then( m => m.ByconcernPageModule)
  },
  {
    path: 'exploreroutines',
    loadChildren: () => import('./exploreroutines/exploreroutines.module').then( m => m.ExploreroutinesPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'viewreviews',
    loadChildren: () => import('./viewreviews/viewreviews.module').then( m => m.ViewreviewsPageModule)
  },
 
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
