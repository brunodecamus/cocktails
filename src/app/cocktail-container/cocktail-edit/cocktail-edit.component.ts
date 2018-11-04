import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  public cocktail: Cocktail;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('index')) {
        this.cocktail = this.cocktailService.getCocktail(Number(params.get('index')));
        this.initForm(this.cocktail);
      } else {
        this.initForm();
      }
    });
  }

  initForm(cocktail = { name: '', img: '', desc: '', ingredients: [] }) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: cocktail.desc,
      ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group({ name: ingredient.name, quantity: ingredient.quantity })))
    })
  }

  createCocktail() {
    // Se charge de faire une requête POST à l’API pour sauvegarder le cocktail en DB
    console.log("CocktailEditComponent.createCocktail : " + this.cocktailForm);
    console.log(this.cocktailForm);
    this.cocktailService.addCocktail(this.cocktailForm.value);
  }

  addIngredient() {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name: '',
      quantity: ''
    }))
  }

}
