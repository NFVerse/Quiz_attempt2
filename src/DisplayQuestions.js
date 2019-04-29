import React, { Component } from 'react';

class DisplayQuestions extends Component {


    render(){

        const answerOptions = this.props.question.Answers.map(
            answer => <button key={Object.keys(answer)} 
            value={Object.values(answer)} onClick={this.props.buttonAddScore}>
            {Object.keys(answer)}</button>)
        //This function is mapping the information that is being passed from props from the questions component
        //That it recieved from the database.
        return(
            <div>

                <h4>{this.props.question.Title}</h4>
                {answerOptions}<br/>
            </div>
        )
    }
}

export default DisplayQuestions