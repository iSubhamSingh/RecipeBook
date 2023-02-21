import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new EventEmitter<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Eggs',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredient(index: number){
        return this.ingredients[index];
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    updateIngredient(index:number, newingredient: Ingredient){
        this.ingredients[index] = newingredient;
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients)
        {
            this.addIngredient(ingredient);
        }
    }
}