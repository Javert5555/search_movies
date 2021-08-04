import React, { Component } from 'react';

export default class Navibar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: 'однажды в... голливуде'
        }
    }

    handleClickGetMovies = async (e) => {
        e.preventDefault();
        const adressAPI =  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${this.state.keyword}&page=1`;
        const response = await fetch(adressAPI, {
            headers: {
                'X-API-KEY': 'bb9804ba-323d-4514-8262-7a02b5276b63'
            }
        });
        const resultJson = await response.json();
        console.log(resultJson.films);
        return resultJson.films;
    }

    handleChangeSearchValue = ({ target }) => {

    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto mb-2 mb-lg-0" href="#">Поиск кино</a>
                    <form className="d-flex" onSubmit={this.handleClickGetMovies}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Название..."
                            aria-label="Search"
                            onChange={this.handleChangeSearchValue}
                        />
                        <button className="btn btn-outline-light" type="submit">Поиск</button>
                    </form>
                </div>
            </nav>
        );
    }
}