import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
    ) { }
  
  card = new Card();

  ngOnInit() {
  }
  
  onSubmit(): void { 
    //get the category id:
    const category_id = +this.route.snapshot.paramMap.get('category_id');
    this.card.category_id = Number(category_id);
    //call the service to update the array
    this.cardService.addCard(this.card).subscribe();
    this.location.back();
  }
  
  goBack(): void {
    this.location.back();
  }

}
