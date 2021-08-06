import React from 'react';
import '../index.css';
// import '../icons/fill-icons.svg'
import Icon from '../icons/star-fill.svg';


export const Card = movie => {

    return (
            <div className="d-flex card movie-card">
                <img src={movie.posterUrlPreview} className="card-img-top card-img" alt="..." />
                <div className="card-body ta-center">
                    <h5 className="card-title">{movie.nameRu}</h5>
                    <div className="card-text d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    {movie.rating}
                    </div>
                    <p className="card-text overflow-auto card-description">{movie.description}</p>
                </div>
                <div className='d-flex align-items-end justify-content-center pb-2'>
                    <a
                        href={`https://www.kinopoisk.ru/film/${movie.filmId}/`}
                        rel="noreferrer"
                        target='_blank'
                        className="btn btn-dark"
                    >Перейти...</a>
                </div>
            </div>
    );
}


