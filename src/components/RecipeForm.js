import React, {Component} from 'react';
import axios from 'axios';


export default class RecipeForm extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
    }



    addRecipe = (event) => {

        console.log(event.target[0].value)

        let newItem = {
            name: event.target[0].value,
            description: event.target[1].value,
            ingredients: event.target[2].value,
            image: event.target[3].value
        }

        axios
            .post("http://localhost:5000/recipe/createrecipe", newItem)
            .then(response => {

                console.log(response)

            }).catch(err => console.log(err))
    }



    render() {

        return (
            <div>
                <form onSubmit={this.addRecipe}>
                    <input id="name" type="text" placeholder="name"></input>
                    <br></br>
                    <input id="description" type="text" placeholder="description..."></input>
                    <br></br>
                    <input id="ingredients" type="text" placeholder="ingredients..."></input>
                    <br></br>
                    <input id="image" type="text" placeholder="image url"></input>
                    <br></br>
                    <button type="submit" >Create</button>
                </form>
            </div>
        )
    }

}