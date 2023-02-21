import { Component, OnInit} from '@angular/core';
import { Recipe } from '../receipe.model';
import { ReceipesService } from '../receipes.service';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Recipe[] ;
  
  constructor(private receipeService:ReceipesService) { }

  ngOnInit() {
    this.recipes = this.receipeService.getReceipes()
  }

/*
  recipeEmitted(clickedRecipe){
    this.emitClickedRecipe.emit(clickedRecipe);
  }
*/
}