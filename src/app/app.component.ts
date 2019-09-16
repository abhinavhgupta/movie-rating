import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadMovies } from './store/movie.actions';
import { MovieData } from './model';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { moviesData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie List';
  userForm: FormGroup;
  mov: MovieData[];

  movies: MovieData[] = moviesData;

  constructor(private store: Store<any>) {
    this.store.dispatch(new LoadMovies(this.movies));
  }

  ngOnInit() {
    var newMovieList: MovieData[];
    this.store.pipe(select('reducers')).subscribe((as: any) => {
      this.mov = as.movieData.sort((a: MovieData, b: MovieData) => {
        return b.rating - a.rating
      })
    })

    this.userForm = this.getFormGroup(this.mov);

    this.userForm.valueChanges.pipe(debounceTime(1000)).subscribe((a) => {
      newMovieList = [];
      this.mov.forEach((mo, index) => {
        if (this.userForm.controls[mo.name].dirty) {
          newMovieList.push(new MovieData(mo.name, a[mo.name]));
        } else {
          newMovieList.push(new MovieData(mo.name, this.mov[index].rating));
        }
      })

      this.store.dispatch(new LoadMovies(newMovieList));
    });

  }

  /**
   * To generate dynamic form for Movies List
   * @param movies 
   */
  getFormGroup(movies: MovieData[]) {
    let group: any = {};

    movies.forEach(movie => {
      group[movie.name] = new FormControl(movie.rating);
    });

    return new FormGroup(group);
  }


  /**
   *To Generate Random rating.
   */
  randomRating() {
    this.reset();
    var min = 0.1;
    var max = 10.0;
    var newMovieList: MovieData[] = [];
    this.movies.forEach((mov, index) => {
      newMovieList.push(new MovieData(mov.name, (Math.random() * (+max - +min) + +min).toFixed(1)));
    })

    this.store.dispatch(new LoadMovies(newMovieList));

  }
  /**
   * To Reset the form to Initial state.
   */
  reset() {
    this.userForm.reset();
    this.store.dispatch(new LoadMovies(this.movies));
  }




}
