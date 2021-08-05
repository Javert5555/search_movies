import { GETMOVIES } from "./types";

export function getMovies(keyword) {
    return async dispatch => {
        try {
            const adressAPI =  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`;
            const response = await fetch(adressAPI, {
                headers: {
                    'X-API-KEY': 'bb9804ba-323d-4514-8262-7a02b5276b63'
                }
            });
            const resultJson = await response.json();
            dispatch({type: GETMOVIES, payload: resultJson})
        } catch (e) {
            console.error(e)
        }
    }
}