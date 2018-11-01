import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { PanierService } from '../../shared/services/panier.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  public index: number;

  constructor(private activateRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.cocktail = this.cocktailService.getCocktail(params.index);
        this.index = params.index;
      } else {
        this.cocktail = this.cocktailService.getCocktail(0);
        this.index = 0;
      }
    });
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }

  getUrl_() {
    return '/cocktails/' + this.index + '/edit';
  }

  getUrl() {
    return ['/cocktails', this.index, 'edit'];
  }
}
