import React, { Component } from 'react';
import { apiurl } from './config'
import  UpdateTheUser from './UpdateTheUser'


class DeleteUser extends Component {
   state = {
       isUpdating : false
   }
    handleDelete = async (event) => {
        await fetch(`${apiurl}/user/${this.props.user._id}`, {
          method: "DELETE"
      }).then(event.preventDefault())
      .then(console.log(this.props.user))
      .then(err => console.log(err))
    };

    toggleUpdate = () => {
        this.setState({ isUpdating : !this.state.isUpdating})
    }

    buttons = () => (
        <div>
            <input type="button" value="Delete" onClick={this.handleDelete} />
            <input type="button" value="Update" onClick={this.toggleUpdate} />
        </div>
    )
    updateForm = () => (
        <div>
            <UpdateTheUser user={this.props.user} refresh={this.props.refresh} closeUpdate={this.toggleUpdate}/>
            <input type="button" value="Cancel" onClick={this.toggleUpdate}/>
        </div>
    )

    render(){
        return(
            <div>
                <div>
                    <h2>Name: {this.props.user.name} </h2>
                    <h3>Score:{this.props.user.score}</h3>
                </div>
                {this.state.isUpdating ? <this.updateForm/> : <this.buttons/>}
            </div>
        )
    }
}

export default DeleteUser