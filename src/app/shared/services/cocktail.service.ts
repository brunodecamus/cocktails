import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class CocktailService {

  // public tmp: Cocktail[] = [
  //   new Cocktail(
  //     'Mojito',
  //     'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
  //     'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.',
  //     [new Ingredient('Eau', 1), new Ingredient('Cerise', 12), new Ingredient('Citron', 2), new Ingredient('Bierre', 5)]),
  //   new Cocktail(
  //     'Margarita',
  //     'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg',
  //     "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila.",
  //     [new Ingredient('Pomme', 1), new Ingredient('Perrier', 5), new Ingredient('Absinthe', 7)]),
  //   new Cocktail(
  //     'Sour',
  //     'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg',
  //     "Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d'Amérique . C'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l'eau gazeuse à ceci le transforme en un gin fizz .",
  //     [new Ingredient('Mirabelle', 1), new Ingredient('Perrier', 5), new Ingredient('Citron', 2), new Ingredient('Perrier', 5)])
  // ];

  // public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(this.tmp);
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {

    // Pour initialiser
    // this.http.put('https://cocktail-8aa45.firebaseio.com/cocktails.json', this.cocktails.value).subscribe();

    this.cocktailsInit();

  }

  cocktailsInit(): void {
    this.http.get<Cocktail[]>('https://cocktail-8aa45.firebaseio.com/cocktails.json').subscribe(cocktails => {
      console.log("request http : ");
      //console.log(cocktails);
      this.cocktails.next(cocktails);
    })
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter(cocktails => cocktails != null),
      map(cocktails => cocktails[index]))
  }

  addCocktail(cocktail: Cocktail) {
    console.log("Ajoute un cocktail : ");
    console.log(cocktail);
    let cocktails = this.cocktails.value;
    let updateElement: boolean;
    updateElement = false;

    cocktails.map(x => {
      if (x.name === cocktail.name) {
        console.log("Update:" + x.name);
        x = x;
        x.img = cocktail.img;
        x.desc = cocktail.desc;
        // pour les ingredients a voir un jour
        updateElement = true;
      } else {
        console.log("New:" + x.name);
        x = x;
      }
    });

    if (!updateElement) {
      cocktails.push({ name: cocktail.name, img: cocktail.img, desc: cocktail.desc, ingredients: cocktail.ingredients });
    }

    this.cocktails.next(cocktails);

    console.log("Tous le cocktail pour debug");
    console.log(this.cocktails);
  }

}
