import React from 'react';
import D1 from '../images/dice-six-faces-one.png';
import D2 from '../images/dice-six-faces-two.png';
import D3 from '../images/dice-six-faces-three.png';
import D4 from '../images/dice-six-faces-four.png';
import D5 from '../images/dice-six-faces-five.png';
import D6 from '../images/dice-six-faces-six.png';
import Table from './table'
import Counter from './counter'


class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentFace: D1,
            currentNumber: 1,
            rolls: [],
            faceCounts: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }
        }
        this.rollDice = this.rollDice.bind(this);
        this.addRolls = this.addRolls.bind(this);
    }

    addRolls(num) {
        const rollsCopy = this.state.rolls.slice()
        const faceCountsCopy = Object.assign({}, this.state.faceCounts)

        if (rollsCopy.length === 10) {
            let removedNum = rollsCopy.shift();

            faceCountsCopy[removedNum] -= 1;
            faceCountsCopy[num] += 1;

            rollsCopy.push(num);
        } else {
            faceCountsCopy[num] += 1;
            rollsCopy.push(num)
        }

        return {rollsCopy, faceCountsCopy}

    }

    rollDice() {

        // const numImages = {
        //     D1 : '../images/dice-six-faces-one.png',
        //     D2 : '../images/dice-six-faces-two.png',
        //     D3 : '../images/dice-six-faces-three.png',
        //     D4 : '../images/dice-six-faces-four.png',
        //     D5 : '../images/dice-six-faces-five.png',
        //     D6 : '../images/dice-six-faces-six.png',
        // }

        const numberImageArray = [D1, D2, D3, D4, D5, D6]
        const numberImageArray = Object.values(numImages);
        const rolledNumIdx = Math.floor(Math.random() * 6);
        const rolledNum = rolledNumIdx + 1
        const rolledNumFace = numberImageArray[rolledNumIdx];
        
        const rollsObject = this.addRolls(rolledNum)

        this.setState({ 
            currentFace: rolledNumFace, 
            currentNumber: rolledNum, 
            rolls: rollsObject.rollsCopy, 
            faceCounts: rollsObject.faceCountsCopy})
    }


    render() {

        return (
            <div className="diceAndTableContainer">
                <div className="diceContainer">
                    <img className="die" src={this.state.currentFace} alt="" />        
                </div>

                <div className="tableBtnContainer">
                    <h1 className="currentNumberTitle"> Current Number </h1>

                    <div className="numericalNumberContainer">
                        <h1 className = "currentNumericalNumber">{this.state.currentNumber}</h1>
                    </div>
    
                    <Table rolls={this.state.rolls} faceCounts={this.state.faceCounts} />

                    <button
                        className="rollBtn"
                        onClick={this.rollDice}> ROLL </button>
                </div>

                <Counter faceCounts={this.state.faceCounts} />
            </div>
        )

    }


}

export default Dice;