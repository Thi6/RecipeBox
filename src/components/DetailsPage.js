import React from 'react';

export default function DetailsPage(props) {
return(
        <div>
        
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.ingredients}</p>
            <img src={props.image} alt="image not found"></img>
        </div>
)
}