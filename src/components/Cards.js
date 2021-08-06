import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { Card } from './Card';
import { Loader } from './Loader';
import { Alert } from './Alert';

const Cards = ({ movies, loading, alert }) => {

    if (loading) {
        return <Loader />
    } else if (!movies.length && !alert) {
        return <p className='text-center'>Фильмов пока нет</p>
    } else if (alert) {
        return <Alert text={alert} />
    }

    return (
        <div className='container bg-dark mt-3 mb-3'>
            <div className='row'>
                {movies.map(movie => <Card key={movie.filmId} {...movie} />)}
            </div>
        </div>
    );
}



const mapStateToProps = state => {
    return {
    movies: state.movies.movies,
    loading: state.app.loading,
    alert: state.app.alert
}};

export default connect(mapStateToProps, null)(Cards);