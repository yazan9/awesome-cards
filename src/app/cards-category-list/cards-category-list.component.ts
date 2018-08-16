import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';
import { Category } from '../category';

@Component({
  selector: 'app-cards-category-list',
  templateUrl: './cards-category-list.component.html',
  styleUrls: ['./cards-category-list.component.css']
})
export class CardsCategoryListComponent implements OnInit {

  constructor(private cardService: CardService) { }
  
  categories: Category[];

  ngOnInit() {
    this.getCategories();
  }
  
  getCategories(): void {
    //this.categories = this.cardService.getCategories();
    this.cardService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
