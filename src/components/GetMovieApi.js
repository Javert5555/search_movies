import React, { Component, Fragment } from 'react';


export default class GetMovieApi extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getMovies = async () => {
        const keyword = 'однажды в... голливуде';
        const adressAPI =  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`;
        const response = await fetch(adressAPI, {
            headers: {
                'X-API-KEY': 'bb9804ba-323d-4514-8262-7a02b5276b63'
            }
        });
        const resultJson = await response.json();
        console.log(resultJson);
    }

    render() {
        return (
            <Fragment>
                <div>123</div>
                <button onClick={this.getMovies}>get movies</button>
            </Fragment>
        );
    }

}