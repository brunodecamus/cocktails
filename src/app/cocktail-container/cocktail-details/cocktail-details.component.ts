import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { PanierService } from '../../shared/services/panier.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  public index: number;

  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('index')) {
        this.index = Number.parseInt(params.get('index'));
      } else {
        this.index = 0;
      }
      this.cocktailService.getCocktail(this.index).subscribe(cocktails => this.cocktail = cocktails);
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
