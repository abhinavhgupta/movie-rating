import { MovieData } from '../model';
import { ActionReducerMap } from '@ngrx/store';
import { ActionsUnion, MovieActionTypes } from './movie.actions';
const initialMovieState: MovieState = {
    movieData: null
};
export interface MovieState {
    movieData: MovieData[] | null;
}

export interface AppState {
    movie: MovieState;
}

export function movieReducer(state: MovieState = initialMovieState, action: ActionsUnion): MovieState {
    switch (action.type) {
        case MovieActionTypes.LoadMovie:
            return {
                movieData: action.payload
            };

        default:
            return state;
    }
}

export const reducers: ActionReducerMap<AppState> = {
    movie: movieReducer
};