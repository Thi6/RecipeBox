import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import DetailsPage from './DetailsPage';



export default function NavBar(props) {
    console.log(props.data);
    return (
        <div>
            <p>Recipe Box</p>    
            <Router>
                <div>

                    <button>
                        <Link to="/RecipeForm">Add Recipe</Link>
                    </button>
                    <button>
                        <Link to="/RecipeList">All</Link>
                    </button>
                    <br></br>

                    <Route path="/RecipeForm" component={RecipeForm} />
                    <Route path="/RecipeList" render={() => <RecipeList getAll={props.getAll} data={props.data} />} />
                </div>

                {/* route for each recipe */}
                {props.data.map( (recipe) => (
                    <Route key={recipe._id} path={"/" + recipe.name} render={() => <DetailsPage 
                    getAll={props.getAll} 
                    name={recipe.name}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    image={recipe.image}
                    _id={recipe._id}
                    /> 
                    } />

                ))}

            </Router>
        </div>
    )

}
