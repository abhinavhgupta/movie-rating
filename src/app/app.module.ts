import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/movie.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ reducers: movieReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
