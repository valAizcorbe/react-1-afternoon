import React, {Component} from 'react';

export default class EvenAdnOdd extends Component {

    constructor(){
        super();
            this.state = {
                evenArray : [],
                oddArray : [],
                userInput : ""
            }
    }

    handleChange(value){
        this.setState({userInput: value});
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for (let i =0; i < arr.length; i++) {
            if ( arr[i] % 2 === 0 ){
                evens.push(parseInt(arr[i],10));
            } else {
                odds.push(parseInt(arr[i], 10));
            }
        }

        this.setState({evenArray: evens, oddArray: odds })
    }

    render(){
        return (
            <div className = "puzzleBox evenAndOddPB">
                <h4> Evens and Odd</h4>
                <input className = "inputLine" onChange ={(event) => this.handleChange(event.target.value)}></input>
                <button className = "confirmationButton" onClick = {() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className = "resultBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className = "resultBox">Odds: { JSON.stringify(this.state.oddArray) }</span>

            </div>
        )
    }
}