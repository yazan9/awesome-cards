import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';
import { Category } from '../category';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() deleted = new EventEmitter();
  
  isAnswer= false;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }
  
  toggleAnswer(): void{
    this.isAnswer = !this.isAnswer;
  }
  
  deleteCard(card: Card): void{
    this.cardService.deleteCard(card.id).subscribe();
    this.deleted.emit();
  }

}
