import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier/panier.component';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { AppRouting } from './app.module-routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';


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
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
