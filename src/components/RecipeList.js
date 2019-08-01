import React from 'react';

import EachRecipe from './EachRecipe'

export default function RecipeList(props) {

const {
    data
} = props;

    console.log(props);
    return (
        <div>
           
                    { data.map((recipe) => (
                       <EachRecipe 
                       getAll={props.getAll} 
                       name={recipe.name} 
                       description={recipe.description} 
                       ingredients={recipe.ingredients}
                       image={recipe.image} 
                       />
                     
                    ))}

       

        </div>
    );
}

