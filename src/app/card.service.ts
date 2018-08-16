import { Injectable } from '@angular/core';
import { Card } from './card';
import { Category } from './category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  
  CATEGORIES: Category[] = [
  { id: 1, name: 'Science', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/eorbjaddudyvfgkmzsr7.jpg'},
  { id: 2, name: 'Math', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/lcslxdjagjxnbqyjam0g.jpg'},
  { id: 3, name: 'Animals', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/wvjmxbw1jjfdo8uh79zz.jpg'},
  { id: 4, name: 'Space', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/kaat2jbjpghpza782jl2.jpg'},
  { id: 5, name: 'Sea World', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/dohcqme4c2w6jjvefpr9.jpg'},
  { id: 6, name: 'Geography', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/t7kleu76bgpevkzroynl.jpg'},
  { id: 7, name: 'Technology', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/yz07kpzzyszsos7uimb7.jpg'},
  { id: 8, name: 'Random', img: 'https://res.cloudinary.com/dzv1zwbj5/image/upload/c_crop,g_custom/zvhetecyvxtqbvr8hdrs.jpg'}
  ];
  
  CARDS: Card[] = [
  {id: 1, category_id: 1, question: "True or False? Electrons are smaller than atoms", answer: "True"},
  {id: 2, category_id: 1, question: "Which kind of waves are used to make and receive cellphone calls?", answer: "Radio waves"},
  {id: 3, category_id: 3, question: "Which animal leaps out of the water to communicate with others of its kind?", answer: "Whale"},
  {id: 4, category_id: 3, question: "Which animal's baby is known as a 'cygnet'?", answer: "Swan"},
  {id: 5, category_id: 2, question: "How much is 9 X 5?", answer: "45"},
  {id: 6, category_id: 2, question: "How much is 9 / 0? ", answer: "Undefined"},
  {id: 7, category_id: 4, question: "What is the Great Red Spot?", answer: "A storm on Jupiter"},
  {id: 8, category_id: 4, question: "How much would a 150-pound person weigh on Mars?", answer: "57 pounds"},
  {id: 9, category_id: 5, question: "What is the Great Red Spot", answer: "A storm on Jupiter"},
  {id: 10, category_id: 5, question: "What is the Great Red Spot", answer: "A storm on Jupiter"},
  {id: 11, category_id: 6, question: "What is the Capital of Belgium?", answer: "Brussels"},
  {id: 12, category_id: 6, question: "Where are Ural mountains located?", answer: "Russia"},
  {id: 13, category_id: 7, question: "Who founded Apple computer", answer: "Steve Jobs"},
  {id: 14, category_id: 7, question: "What does the Internet prefix WWW stand for?", answer: "World Wide Web"},
  {id: 15, category_id: 8, question: "This is a random question", answer: "This is a random answer"},
  {id: 16, category_id: 8, question: "This is a random question", answer: "This is a random answer"}
  ];
  
  getCategories(): Observable<Category[]> {
    return of(this.CATEGORIES);
  }
  
  getCategory(id: number): Observable<Category> {
    return of(this.CATEGORIES.find(category => category.id === id));
}
  
  getCards(): Observable<Card[]> {
    return of (this.CARDS);
  }
  
  getCategoryCards(category_id: number): Observable<Card[]>{
    return of (this.CARDS.filter(card => card.category_id === category_id));
  }
  
  deleteCard(id:number): Observable<Card[]>{
    //this.CARDS.splice(this.CARDS.indexof(this.CARDS.find(card=>card.id === id)));
    let index = this.CARDS.findIndex(card => card.id === id);
    console.log(index);
    return of (this.CARDS.splice(index,1));
  }
  
  addCard(card:Card): Observable<Card[]>{
    //fix the id
    let last_id = this.CARDS[this.CARDS.length-1].id;
    let new_id = last_id+1;
    console.log(last_id);
    
    //fix the new object
    let new_card = card;
    new_card.id = new_id;
    this.CARDS.push({id: new_card.id,category_id: new_card.category_id, question: new_card.question, answer: new_card.answer});
    
    console.log(this.CARDS);
    return of(this.CARDS);
  }
}
