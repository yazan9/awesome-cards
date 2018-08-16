import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardsCategoryComponent } from './cards-category/cards-category.component';
import { CardsCategoryListComponent } from './cards-category-list/cards-category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsCategoryDetailsComponent } from './cards-category-details/cards-category-details.component';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardsCategoryComponent,
    CardsCategoryListComponent,
    CardsCategoryDetailsComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
