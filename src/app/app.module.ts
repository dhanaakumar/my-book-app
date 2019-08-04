import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './bookList/bookList.component';
import { StarRatingComponent } from './starRating/starRating.component';
import { FilterPipe } from './bookList/bookList.pipe';

import { BookListService } from './bookList/bookList.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    StarRatingComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [
    BookListService
  ]
})

export class AppModule {

}
