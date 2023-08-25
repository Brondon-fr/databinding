import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: recipe[] = [ 
   new recipe('A Test Recipe', 'this is simply a test','https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=1500&quality=50')];
   
  constructor(){}
  ngOnInit(): void {
    
  }
}
