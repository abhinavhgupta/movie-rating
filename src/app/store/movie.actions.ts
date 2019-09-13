import { MovieData } from '../model';
import { Action } from '@ngrx/store';

export enum MovieActionTypes {
    LoadMovie = '[Home Page] Load Movie',
    UpdateMovie = '[Home Page] Update Movie'
}

export class MovieAction implements Action {
    type: string;
    payload: {
        initialMovieData: MovieData[],
        updateMovieData: MovieData[]
    };
}

export class LoadMovies implements Action {
    readonly type = MovieActionTypes.LoadMovie;

    constructor(readonly payload: MovieData[]) {
        console.log('payload', payload);
    }
}

export class UpdateMovies implements Action {
    readonly type = MovieActionTypes.UpdateMovie;

    constructor(readonly payload: MovieData[]) {
    }
}


export type ActionsUnion = LoadMovies | UpdateMovies;