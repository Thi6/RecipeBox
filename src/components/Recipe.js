import React, {Component} from 'react';
import axios from 'axios';


import Navbar from './Navbar';


export default class Recipe extends Component{
    constructor(){
        super();
        this.state={
            data: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll = () => {
        axios
        .get('http://localhost:5000/Recipe/all')
        .then(response => {
            
            this.setState({
                data: response.data
            })
            console.log(response.data);
        })
    }
    
    render() {
        return(
            <div>
   
               
                <Navbar getAll={this.getAll} data={this.state.data}/>
            </div>
        )
    }

}
