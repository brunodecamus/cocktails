import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  @Input() cocktails: Cocktail[];

  @Output() public pick: EventEmitter<number> = new EventEmitter<number>();

  public activeCocktail: number = 0;

  constructor() { }

  ngOnInit() {
  }

  pickCocktail(index: number): void {
    console.log("index selected : " + index);
    this.activeCocktail = index;
    this.pick.emit(index);
  }

}
