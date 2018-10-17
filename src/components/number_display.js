import React from 'react';

const NumberDisplay = ({gameState}) => {  
    return randomRoll(gameState);
};

const randomRoll = (gameState) => {
    if( gameState === 1 ) {
        return <p>Roll to play</p>;
    } else {
        return (
            <div>
                <p>{Math.floor( Math.random() * 6 ) + 1}</p>                
            </div>
        ); 
    }
}

export default NumberDisplay;