import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: ''
    })
  }

  createCocktail() {
    // Se charge de faire une requête POST à l’API pour sauvegarder le cocktail en DB
    console.log("CocktailEditComponent.createCocktail : " + this.cocktailForm);
    console.log(this.cocktailForm)
  }

}
