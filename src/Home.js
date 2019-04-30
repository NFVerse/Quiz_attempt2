import React, { Component } from 'react';
import { apiurl } from './config'
import "../src/I_styling/Home.css"
import DeleteUser from './DeleteUser'


class Home extends Component {
    state = {
        name: '',
        score: 0
    }
    getUsers = async () => {
        await fetch(`${apiurl}/user`)
        .then(response => response.json())
        .then(data => data.map(element => <DeleteUser user={element} key={element._id}/>))
        .then(components => this.setState({ name : components}))
        .catch(err =>console.log(err))
    }

    // showUsers = () => {
    //     <li>{this.state.name}</li>
    // }
    componentDidMount(){
        this.getUsers()
    }

    render(){
        return (
            <div>
                <h2>
                    People who have taken this Quiz!
                </h2>
                <ul>
                    <li>{this.state.name}</li>
                </ul>
                


            </div>
        )
    }
}

export default Home