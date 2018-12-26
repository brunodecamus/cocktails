import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanierComponent } from './panier/panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';
import { GraphsComponent } from './graphs/graphs.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    { path: 'cocktails', component: CocktailContainerComponent , children:[
        {path:'', component: CocktailDetailsComponent},
        {path:'new', component: CocktailEditComponent},
        {path:':index', component: CocktailDetailsComponent},
        {path:':index/edit', component: CocktailEditComponent}
    ] },
    { path: 'panier', component: PanierComponent },
    { path: 'graph', component: GraphsComponent }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);