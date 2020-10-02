import React, {Component} from 'react'


export default class Palindrome extends Component{
    constructor() {
        super();
        this.state = {
            userInput: ``,
            palindrome: ``,
        }


    }

handleUserInput=(val) =>{
this.setState({userInput: val})
    }

checkPalindrome(userInput) {

}




    render() {
        return(
           <div className ='puzzleBox filterStringPB'>
               <h4>Palindrome</h4>
               <input className='inputLine' onChange = { (e) => this.handleUserInput(e.target.value) }/>
               <button className ='confirmationButton' onClick ={ () => this.checkPalindrome(this.state.userInput)}>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
           </div>
        )
    }
}