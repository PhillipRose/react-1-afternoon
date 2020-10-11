import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    
    handleChange(val) {
        this.setState({userInput: val})
    }


    // assignEvenAndOdds(userInput) {
    //     let arr = userInput.split(',');
    //     let evens = [];
    //     let odds = [];
    
    //     for ( let i = 0; i < arr.length; i++ ) {
    //       if ( arr[i] % 2 === 0 ) {
    //         evens.push( parseInt(arr[i], 10) );
    //       } else {
    //         odds.push( parseInt(arr[i], 10) );
    //       }
    //     }
    
    //     this.setState({ evenArray: evens, oddArray: odds });
    //   }
    
    // found the parseInt on MDN and made it work with creating numbers though it would make a double of the first number input every time. I copied the solution code and it worked perfectly but when re-typing the solution code I was still getting the double number error. Found a fix as formatted below, not sure works why it works but it does.
    assignEvenAndOdds(userInput){
        let arr = userInput.split(`,`);
        let evens = [];
        let odds = [];
        arr.push(userInput)
        for ( let i = 1; i <= arr.length-1; i++ ){
            if (arr[i] % 2 === 0){
                evens.push( parseInt(arr[i]) );
            } else {
                odds.push( parseInt(arr[i]) );
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }

    render() {
        return (
          <div className="puzzleBox evenAndOddPB">
            <h4> Evens and Odds </h4>
            <input className="inputLine" placeholder='Seperate numbers with commas' onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray)}</span>
          </div>
        )
      }
}