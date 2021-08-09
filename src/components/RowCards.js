import React from 'react';
import { Card } from './Card';

export const RowCards = movies => {
    const listOfMovies = Object.values(movies)
    return (
        <div className='row mb-4'>
            {listOfMovies.map(movie => <Card key={movie.filmId.toString()} {...movie} />)}
        </div>
    );
}