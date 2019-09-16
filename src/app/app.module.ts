import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/movie.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ reducers: movieReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
