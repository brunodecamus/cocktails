import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Subscription } from 'rxjs';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

