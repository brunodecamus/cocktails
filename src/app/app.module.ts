import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier/panier.component';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

import { AppRouting } from './app.module-routing';
import { PanierService } from './shared/services/panier.service';
import { ActiveDirective } from './shared/directives/active.directive';
import { Sample1Component } from './graphs/sample1/sample1.component';
import { Sample2Component } from './graphs/sample2/sample2.component';
import { Sample3Component } from './graphs/sample3/sample3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    PanierComponent,
    IngredientListComponent,
    ActiveDirective,
    Sample1Component,
    Sample2Component,
    Sample3Component
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
