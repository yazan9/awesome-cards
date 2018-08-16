import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';
import { Category } from '../category';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Output() deleted = new EventEmitter();

  constructor(private cardService: CardService) { }
  
  @Input() cards: Card[];
  @Input() category_id: number;

  ngOnInit() {
    //this.getCards();
  }
  
  getCards(): void {
    //this.cards = this.cardService.getCards();
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }
  
  onDeleted(): void {
    console.log("something was deleted");
    this.deleted.emit();
  }

}
