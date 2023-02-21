import { Component, OnInit } from '@angular/core';
import { ReceipesService } from './receipes.service';
@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers:[ReceipesService]
})
export class ReceipesComponent implements OnInit {
selected;
  constructor(private receipesService:ReceipesService) { }

  ngOnInit() {
    this.receipesService.receipeSelected.subscribe(value =>this.selected = value);
  }

}