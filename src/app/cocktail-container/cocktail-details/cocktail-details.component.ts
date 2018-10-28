import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { PanierService } from '../../shared/services/panier.service';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail;

  constructor(private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => {
      this.cocktail = cocktail
    }
    );
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }

}
