import React, { Component } from 'react';
import { apiurl } from './config'
import Questions from './Questions'


// import { Link } from 'react-router-dom'

class NewUser extends Component {
    state = {
        name: "",
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        }

    handleSubmit = (event) => {
        event.preventDefault()
        this.newUserInput()
    }

    newUserInput = async () => {
        await fetch(`${apiurl}/user`, {
          method: 'POST',
          body: JSON.stringify(this.state)
        })
          .catch(err => console.log(err))
      };

      
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Welcome User!</h2>
                        <p> Do you think you have what it takes to beat this quiz? Enter in your name and begin!</p>
                    <input 
                        type='text'
                        name='name'
                        placeholder='First and Last Name'
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    <input type='submit'/>
                    <br></br>
                    <br></br>
                    
                    </div>
                </form>
                <Questions/>
            </div>
        )
    }
}

export default NewUser