import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { Loader } from './Loader';
import { Alert } from './Alert';
import { RowCards } from './RowCards';

const Cards = ({ movies, loading, alert }) => {

    if (loading) {
        return <Loader />;
    } else if (!movies.length && !alert) {
        return <p className='text-center mt-5'>Фильмов пока нет</p>;
    } else if (alert) {
        return <Alert text={alert} />;
    }

    let maxQuantityOfColsInRow = 4,
        rangeInListOfMovies = 4,
        listOfMovies = [];  

    for(let i = 0; i < movies.length / 4; i++) {
        listOfMovies.push(movies.slice(maxQuantityOfColsInRow - rangeInListOfMovies, maxQuantityOfColsInRow));
        maxQuantityOfColsInRow += rangeInListOfMovies;
    }

    return (
        <section>
            <div className='container bg-dark rounded pt-3'>
                    {listOfMovies.map((fourMovies, index) => <RowCards {...fourMovies} key={(index + Math.random()).toString()} />)}
            </div>
        </section>
    );
}



const mapStateToProps = state => {
    return {
    movies: state.movies.movies,
    loading: state.app.loading,
    alert: state.app.alert
}};

export default connect(mapStateToProps, null)(Cards);