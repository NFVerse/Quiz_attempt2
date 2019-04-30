import React, { Component } from 'react';
import { apiurl } from './config'

class UpdateTheUser extends Component {
state = {
    name: this.props.user.name,
    score: this.props.user.score
}
handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

handleSubmitUpdate = async (event) => {
    event.preventDefault()
    await fetch(`${apiurl}/user/${this.props.user}`, {
        method : "PUT",
        body:  JSON.stringify(this.state),
    headers: {
    'Accept': 'application/json',
    'Content-Type' : 'application/json'
}}).then(console.log("Updated"))
    .catch(err => console.log(err))
    // .then(button.style.display = "none") Heres an idea to get all the buttons to disappear when clicked! Style doesnt work, button needs to be defined.
}
render(){
    return(
        <form onSubmit={this.handleSubmitUpdate}>
            <input type='text'
                        name='name'
                        value={this.state.name}
                        onChange ={this.handleChange}/>
            <input type='number'
                        name='score'
                        value={this.state.score}
                        onChange ={this.handleChange}/>
            <input type='submit'/>
        </form>
        )
    }
}

export default UpdateTheUser