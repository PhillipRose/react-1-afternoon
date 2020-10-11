import React, {Component} from 'react'


export default class Sum extends Component{
    constructor() {
        super();
        this.state ={
            number1: 0,
            number2: 0,
            sum: null
        }

    }
    
//Using the + converts the val to an integer from a string, though parseInt would be better for a more complex function.
    num1 = (val) =>{
        this.setState({number1:(+val)})
    }
    num2 =(val)=>{
        this.setState({number2: (+val)})
    }
    add = (num1,num2) => {
        let total = num1 + num2
        this.setState({sum:total})
    }

    render() {
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className ='inputLine' type ='number' onChange={(e)=>this.num1(e.target.value)}/>
                <input className ='inputLine' type ='number' onChange={(e) => this.num2(e.target.value)}/>
                <button className='confirmationButton' onClick ={()=> this.add(this.state.number1,this.state.number2)}>Add</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>

        )
    }
}