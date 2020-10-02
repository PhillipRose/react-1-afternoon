import React, { Component } from 'react'


export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [`James`, `Hector`, `Arthur`, `Brian`],
            userInput: ``,
            filteredArray: [],


        };
    }

    handleChange = (val) => {
        this.setState({ userInput: val })
    };

    filterNames = (userInput) => {
        let namesList = this.state.unfilteredArray
        let filteredNames = []

        for (let i = 0; i < namesList.length; i++) {
            if (namesList[i].includes(userInput)) {
                filteredNames.push(namesList[i]);
            }
        }

        this.setState({ filteredNames });
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringPB'>Filtered Names: {JSON.stringify(this.state.filteredNames)}</span>
            </div>
        )
    }
}

