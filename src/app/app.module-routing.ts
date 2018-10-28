import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanierComponent } from './panier/panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    { path: 'panier', component: PanierComponent },
    { path: 'cocktails', component: CocktailContainerComponent }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);