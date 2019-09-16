import { Component, OnInit, Input } from '@angular/core';
import { MovieData } from '../model';
import { FormGroup } from '@angular/forms';
import { LoadMovies } from '../store/movie.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieData;
  @Input() form: FormGroup;
  @Input() updatedList: MovieData[];
  @Input() index: number;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
