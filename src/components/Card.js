import React, { Component } from 'react';
import '../index.css';



export default movie => {

    return (
        // <div className='col-sm-6 col-lg-4 col-xxl-3'>
            <div className="d-flex card movie-card">
                <img src={movie.posterUrlPreview} className="card-img-top card-img" alt="..." />
                <div className="card-body ta-center">
                    <h5 className="card-title">{movie.nameRu}</h5>
                    <p className="card-text overflow-auto card-description">{movie.description}</p>
                </div>
                <div className='d-flex align-items-end justify-content-center pb-2'>
                    <a
                        href={`https://www.kinopoisk.ru/film/${movie.filmId}/`}
                        target='_blank'
                        className="btn btn-dark"
                    >Перейти...</a>
                </div>
            </div>
        // </div>
    );
}


