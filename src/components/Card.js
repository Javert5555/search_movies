import React from 'react';
import '../index.css';

export const Card = movie => {

    const poster = movie.posterUrlPreview,
        name = movie.nameRu,
        rating = movie.rating,
        genres = movie.genres.map(({ genre = '' }) => genre)

    return (
            <div className="d-flex card movie-card">
                <img src={poster} className="card-img-top card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="mb-2">
                        <i className="fas fa-star"></i>
                        {` ${rating}`}
                    </div>
                    <div className="mb-2 text-truncate">
                        {`Жанр: ${genres}`}
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


