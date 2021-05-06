import React from 'react';

function Card ({email, fullName}) {
    return (
        <div className="card" style={{width : "18rem"}}>
            <div className="card-body">
            <p className="card-text">{fullName}</p>
            <p className="card-text">{email}</p>
            </div>
        </div>
    );
}

export default Card;