import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanierComponent } from './panier/panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

import { Sample1Component } from './graphs/sample1/sample1.component';
import { Sample2Component } from './graphs/sample2/sample2.component';
import { Sample3Component } from './graphs/sample3/sample3.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    {
        path: 'cocktails', component: CocktailContainerComponent, children: [
            { path: '', component: CocktailDetailsComponent },
            { path: 'new', component: CocktailEditComponent },
            { path: ':index', component: CocktailDetailsComponent },
            { path: ':index/edit', component: CocktailEditComponent }
        ]
    },
    { path: 'panier', component: PanierComponent },
    { path: 'graph1', component: Sample1Component },
    { path: 'graph2', component: Sample2Component },
    { path: 'graph3', component: Sample3Component },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);