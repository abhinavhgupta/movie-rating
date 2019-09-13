import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadMovies } from './store/movie.actions';
import { MovieData } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie List';

  mov: MovieData[];
  updatedList: MovieData[];
  movies: MovieData[] = [
    {
      "name": "How to Train Your Dragon",
      "rating": 10
    },
    {
      "name": "Despicable Me",
      "rating": 1
    },
    {
      "name": "Tangled",
      "rating": 2
    },
    {
      "name": "Iron Man 2",
      "rating": 3
    },
    {
      "name": "The Twilight Saga: Eclipse",
      "rating": 4
    },
    {
      "name": "Shrek Forever After",
      "rating": 5
    },
    {
      "name": "Inception",
      "rating": 6
    },
    {
      "name": "Harry Potter and the Deathly Hallows – Part 1",
      "rating": 7
    },
    {
      "name": "Alice in Wonderland",
      "rating": 8
    },
    {
      "name": "Toy Story 3",
      "rating": 0
    }];

  constructor(private store: Store<any>) {
    this.store.dispatch(new LoadMovies(this.movies));
  }

  ngOnInit() {
    let movies: MovieData[];
    this.store.pipe(select('reducers')).subscribe((as: any) => {

      this.mov = as.movieData.sort((a, b) => {
        return a.rating - b.rating
      })

    })
    this.updatedList = this.mov;
  }

  updateRating(name, rating, index) {

    this.updatedList[index] = {
      rating: rating,
      name: name
    }
    this.updatedList.sort((a, b) => {
      return a.rating - b.rating
    })
    this.store.dispatch(new LoadMovies(this.updatedList));
  }

}
