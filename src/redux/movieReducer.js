import { GETMOVIES } from "./types";

const initialState = {
    loading: false,
    movies: []
};

export const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case GETMOVIES:
            return {...state, loading: true, movies: action.payload.films}

        default:
            return state
    }
}