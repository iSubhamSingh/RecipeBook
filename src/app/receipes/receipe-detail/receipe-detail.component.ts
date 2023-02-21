import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../receipe.model';
import { ReceipesService } from '../receipes.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
@Input() selected:Recipe;
  constructor(private receipeService:ReceipesService) { }

  ngOnInit() {
  }

onAddToShoppingList(){
  this.receipeService.addIngredientsToShoppingList(this.selected.ingredients)
}

}