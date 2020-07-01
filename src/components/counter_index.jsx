import React from 'react';
import CounterIndexItem from './counter_index_item';
import D1 from '../images/dice-six-faces-one.png';
import D2 from '../images/dice-six-faces-two.png';
import D3 from '../images/dice-six-faces-three.png';
import D4 from '../images/dice-six-faces-four.png';
import D5 from '../images/dice-six-faces-five.png';
import D6 from '../images/dice-six-faces-six.png';


const CounterIndex = ({count, faceValue}) => {

    const chipList = [];

    if (faceValue === '1') {
        chipList.push(<img src={D1} alt="" className="spacefiller" key={'die1'}/>)
    } else if (faceValue === '2' ) {
        chipList.push(<img src={D2} alt="" className="spacefiller" key={'die2'}/>)
    } else if (faceValue === '3' ) {
        chipList.push(<img src={D3} alt="" className="spacefiller" key={'die3'}/>)
    } else if (faceValue === '4') {
        chipList.push(<img src={D4} alt="" className="spacefiller" key={'die4'}/>)
    } else if (faceValue === '5') {
        chipList.push(<img src={D5} alt="" className="spacefiller" key={'die5'}/>)
    } else if (faceValue === '6') {
        chipList.push(<img src={D6} alt="" className="spacefiller" key={'die6'}/>)
    }

    for (let i = 0; i < count; i++) {
        chipList.push(<CounterIndexItem key={i}/>)
    }

    return (
        <div className="chipList">
            { chipList }
        </div>
    )
    
}

export default CounterIndex;