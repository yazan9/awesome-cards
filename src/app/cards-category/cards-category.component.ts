import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { Category } from '../category';

@Component({
  selector: 'app-cards-category',
  templateUrl: './cards-category.component.html',
  styleUrls: ['./cards-category.component.css']
})
export class CardsCategoryComponent implements OnInit {
  
  @Input() category: Category;

  constructor() { }
  
  ngOnInit() {
    
  }
  
}
