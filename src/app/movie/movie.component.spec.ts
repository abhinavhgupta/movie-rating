import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from '../store/movie.reducer';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let fb: FormBuilder = new FormBuilder();
  const moviesData = [
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
    }];

  let group: any = {};

  moviesData.forEach(movie => {
    group[movie.name] = new FormControl(movie.rating);
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent], imports: [ReactiveFormsModule, FormsModule,
        StoreModule.forRoot({ 'reducers': movieReducer }),]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup(group);
    component.movie = moviesData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a FormGroup comprised of FormControls', () => {
    expect(component.form instanceof FormGroup).toBe(true);
  });
});
