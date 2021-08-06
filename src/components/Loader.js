import React from "react";

export const Loader = () => (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className="spinner-border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
        </div>
    </div>
);