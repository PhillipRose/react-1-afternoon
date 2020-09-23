import React, {Component} from 'react'


export default class EvenAndOdd extends Component{
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        handleChange(val){
            this.setState({ userInput: val});
        }

        assignEvenAndOdds(userInput) {
            if (userInput % 2 === 0){
                evenArray.push(userInput)
            }
            if (userInput % 2 !== 0){
                oddArray.push(userInput)
            }
        }
    }
    render() {
        return(
            <div>
                <h4> Evens and Odds</h4>
                <input className = 'inputLine' onChange = { (e) => this.handleChange(e.target.value) }/>
                <button className = 'confirmationButton' onClick = { () => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
                <span className = 'resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className = 'resultsBox'> Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}