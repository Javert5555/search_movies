import { GET_MOVIES, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";


export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const showAlert = text => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}


// before sending the request, we show the loader (showLoader), after sending the request, we stop show the loader (hideLoader)
// this function executes a request to the kinopoisk api
export const getMovies = keyword => {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const adressAPI =  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`;
            const response = await fetch(adressAPI, {
                headers: {
                    'X-API-KEY': 'bb9804ba-323d-4514-8262-7a02b5276b63'
                }
            });
            const resultJson = await response.json();
            resultJson.films.length === 0 ?
            dispatch(showAlert(`Фильм с названием ${keyword} не найден`)) :
            dispatch({type: GET_MOVIES, payload: resultJson});
            dispatch(hideLoader());
        } catch (e) {
            console.error(e);
            dispatch(showAlert('Ошибка соединения'))
            dispatch(hideLoader());
        }
    }
}