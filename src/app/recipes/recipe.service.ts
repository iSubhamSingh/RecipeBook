import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    recipesChanged = new EventEmitter<Recipe[]>();

    constructor(private slService: ShoppingListService){}    

    private recipes: Recipe[] = [
        new Recipe('Chiken Biryani','This is simply Biryani','https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg',[new Ingredient('Chicken',1),new Ingredient('Rice',20),]),
        new Recipe('Nihari','A simple Mutton Dish','https://i.ndtvimg.com/i/2017-06/nihari_650x400_81498470650.jpg',[new Ingredient('Mutton', 1), new Ingredient('Tomatoes',10),])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.emit(this.recipes.slice());
    }

    updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe; 
        this.recipesChanged.emit(this.recipes.slice());
    }
    
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.emit(this.recipes.slice());
    }  
}