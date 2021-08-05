import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Card from './Card';

const Cards = ({ movies }) => {
    if (!movies.length) {
        return <p className='text-center'>Фильмов пока нет</p>
    }

    // return <Card {...movies[0]} />

    return (
        <div className='container bg-dark'>
            <div className='row'>
                {movies.map(movie => <Card {...movie} />)}
            </div>
        </div>
    );
}



const mapStateToProps = state => {
    return {
    movies: state.movies.movies
}};

export default connect(mapStateToProps, null)(Cards);