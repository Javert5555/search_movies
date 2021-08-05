import React, { Component } from 'react';
import '../index.css';



export default movie => {

    return (
        <div className='container bg-dark'>
            <div className='row'>
                <div className='col-3'>
                    <div className="card card_width">
                        <img src={movie.posterUrlPreview} className="card-img-top card-img" alt="..." />
                        <div className="card-body ta-center">
                            <h5 className="card-title">{movie.nameRu}</h5>
                            <p className="card-text">{movie.description}</p>
                            <a href={`https://www.kinopoisk.ru/film/${movie.filmId}/`} className="btn btn-dark">Перейти...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


