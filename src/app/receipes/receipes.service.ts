import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './receipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ReceipesService {

  constructor(private slService:ShoppingListService){}

  receipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'This is simply the best', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Big Fat Burger', 'The best burger in town', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getReceipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.slService.addIngre(ingredient)
  }

}