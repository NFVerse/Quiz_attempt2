import React, { Component } from 'react';
import { apiurl } from './config'
import DisplayQuestions from './DisplayQuestions'

// There should be a question component that takes in a single question object from the database and the question component will parse out whatever you want to display.
// for each question you have a questions component This file is the parent to the single questions component
// just some minor refactoring is going to happen. Look at the individual pokemon presenter to get an idea.

class Questions extends Component {
    state= {
        questions: [],
        score: [0],
    }

    add1 = (event) => {
        if (event.target.value === "1"){
            this.state.score.push(1)
        }   else {
            this.state.score.push(0)
        }
    };

    reduce1 = ()=> {
        const total = (accumulator, currentValue) => accumulator + currentValue;
        const output = this.state.score.reduce(total)
        this.setState({score: [output]})
    };
    
    // handleSubmit = async (event) => {
    //     event.preventDefault()
    //     await fetch(`${apiurl}/user/${this.props.name._id}`, {
    //         method : "PUT",
    //         body:  JSON.stringify({name: this.props.name, score : this.state.score}),
    //     headers: {
    //     'Accept': 'application/json',
    //     'Content-Type' : 'application/json'
    // }}).then(console.log("Updated"))
    //     .catch(err => console.log(err))
    //     // .then(button.style.display = "none") Heres an idea to get all the buttons to disappear when clicked! Style doesnt work, button needs to be defined.
    // }// This was my attempt to get the reduce button to update with the specific User. Could not get it working properly so I changed directions.

    getQuestions = async () => {
        await fetch(`${apiurl}/questions`)
        .then(response => response.json())
        .then(data => data.map(question => <DisplayQuestions key ={question._id} question={question} buttonAddScore={this.add1}/>))
        .then(questions => this.setState({questions}))
        .then(()=> console.log(" questions from Questions", this.state.questions))
        .catch(err =>console.log(err))
    }

    componentDidMount(){
        this.getQuestions()
    }

    render(){
         return(
            <div>
                {this.state.questions}
              <button onClick={this.reduce1}>reduce</button>
              <button onClick={this.handleSubmit}>Update</button>
              <h3>Score! : {this.state.score}</h3>
            </div>
        )
    }
}

export default Questions