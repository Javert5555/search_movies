import React from 'react';

export const Alert = ({ text }) => (
    <div className='container'>
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    </div>
);