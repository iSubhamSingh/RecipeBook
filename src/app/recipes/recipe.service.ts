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
        new Recipe('Chiken Biryani','Authentic Chicken Biryani','https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg',[new Ingredient('Chicken',1),new Ingredient('Rice',1),]),
        new Recipe('Pizza','Pepperoni cheese pizza','https://imgs.search.brave.com/w0YFT8UMM8AMdM8B-xaG9qnOP7hxuS9_0eBQEBOvSWE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lmluc3RydWN0/YWJsZXMuY29tL0ZZ/UC9EU1VaL0tLR1Y5/VkZaL0ZZUERTVVpL/S0dWOVZGWi5qcGc_/YXV0bz13ZWJwJmZp/dD1ib3VuZHMmZnJh/bWU9MSZoZWlnaHQ9/MTAyNCZ3aWR0aD0x/MDI0YXV0bz13ZWJw/JmZyYW1lPTEmaGVp/Z2h0PTMwMA',[new Ingredient('Mutton', 1), new Ingredient('Tomatoes',10),])
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