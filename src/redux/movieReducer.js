import { GET_MOVIES } from "./types";

const initialState = {
    movies: []
};

export const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload.films}

        default:
            return state
    }
}