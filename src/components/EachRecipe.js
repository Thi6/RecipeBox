import React from 'react';
import { Link } from "react-router-dom";

export default function EachRecipe(props) {
    return(
        <div>
            {/* to= because using outside the router */}
            <Link to={props.name}>{props.name}</Link>

        </div>
    );
}