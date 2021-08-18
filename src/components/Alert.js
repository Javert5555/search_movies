import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({ text }) => (
    <div className='container mt-3'>
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    </div>
);

Alert.propTypes = {
    text: PropTypes.string.isRequired,
};