import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CardsCategoryListComponent} from './cards-category-list/cards-category-list.component';
import {CardsCategoryDetailsComponent} from './cards-category-details/cards-category-details.component';
import {CardFormComponent} from './card-form/card-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: CardsCategoryListComponent },
  { path: 'category/:id', component: CardsCategoryDetailsComponent },
  { path: 'add/:category_id', component: CardFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
