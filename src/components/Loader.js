import React from "react";

export const Loader = () => (
    <div className='container d-flex justify-content-center align-items-center mt-3'>
        <div className="spinner-border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
        </div>
    </div>
);