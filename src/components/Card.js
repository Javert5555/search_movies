import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../index.css';

export const Card = ({posterUrlPreview, nameRu, rating, filmId, description, genres }) => {

    const moviePoster = posterUrlPreview,
        movieName = nameRu,
        movieRating = rating,
        movieId = filmId,
        movieDescription = description,
        movieGenres = genres.map(({ genre = '' }) => genre);

    return (
        <div className='col-sm-12 col-md-6 col-xl-3 d-flex align-items-stretch'>
            <div className="card mb-3 flex-grow-1">
                <img src={moviePoster} className="card-img-top card_img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{movieName}</h5>
                    <div className="mb-2">
                        <FontAwesomeIcon icon={faStar} />
                        {` ${movieRating}`}
                    </div>
                    <div className="mb-2 text-truncate">
                        {`Жанр: ${movieGenres}`}
                    </div>
                    <p className="card-text overflow-auto card_description">{movieDescription}</p>
                </div>
                <div className='d-flex align-items-end justify-content-center pb-2'>
                    <a
                        href={`https://www.kinopoisk.ru/film/${movieId}/`}
                        rel="noreferrer"
                        target='_blank'
                        className="btn btn-dark"
                    >Перейти...</a>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    posterUrlPreview: PropTypes.string.isRequired,
    nameRu: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    filmId: PropTypes.number.isRequired,
    description: PropTypes.string,
    genres: PropTypes.array,
};

Card.defaultProps = {
    description: '...',
};
