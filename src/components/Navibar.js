import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../redux/actions';

class Navibar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }
    }

    handleClickGetMovies = async (e) => {
        e.preventDefault();
        return this.props.getMovies(this.state.keyword);
    }

    handleChangeSearchValue = ({ target }) => {
        this.setState({
            keyword: target.value
        })
    }


    render() {
        return (
            <header id="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand me-auto mb-2 mb-lg-0" href="/#">Поиск кино</a>
                        <form className="d-flex" onSubmit={this.handleClickGetMovies}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Название..."
                                aria-label="Search"
                                onChange={this.handleChangeSearchValue}
                                value={this.state.keyword}
                            />
                            <button className="btn btn-outline-light" type="submit">Поиск</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapDispatchToProps = {
    getMovies
};

export default connect(null, mapDispatchToProps)(Navibar);