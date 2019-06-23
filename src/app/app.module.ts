import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRouting } from './app.module-routing';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { Sample1Component } from './graphs/sample1/sample1.component';
import { Sample2Component } from './graphs/sample2/sample2.component';
import { Sample3Component } from './graphs/sample3/sample3.component';
import { HeaderComponent } from './header/header.component';
import { MyCheckboxComponent } from './my-checkbox/my-checkbox.component';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { PanierComponent } from './panier/panier/panier.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierService } from './shared/services/panier.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

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
    Sample3Component,
    MyCheckboxComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
