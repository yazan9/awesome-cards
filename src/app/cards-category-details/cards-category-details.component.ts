import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CardService }  from '../card.service';
import { Category } from '../category';
import { Card } from '../card';


@Component({
  selector: 'app-cards-category-details',
  templateUrl: './cards-category-details.component.html',
  styleUrls: ['./cards-category-details.component.css']
})
export class CardsCategoryDetailsComponent implements OnInit {
  category: Category;
  cards: Card[];

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getCategory();
    this.getCategoryCards(this.category.id);
  }
  
  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCategory(id)
    .subscribe(category => this.category = category);
  }
  
  getCategoryCards(category_id: number): void{
    this.cardService.getCategoryCards(this.category.id)
    .subscribe(cards => this.cards = cards);
  }
  
  onDeleted(): void{
    console.log("arrived here!");
    this.getCategory();
    this.getCategoryCards(this.category.id);
  }
}
