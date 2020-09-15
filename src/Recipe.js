import React from 'react';


const Recipe = ({ title, calories, image }) => {
    return (
        <div className="card">
            <img src={image} alt="Food" className="card-img"></img>
            
            <h4><b>{title}</b></h4>
            <p>{calories}</p>
        </div>
    );
}

export default Recipe;