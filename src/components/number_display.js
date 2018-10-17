import React from 'react';

const NumberDisplay = ({gameState}) => {  
    
    

    return <p>{randomRoll(gameState)}</p>    
};

const randomRoll = (gameState) => {
    if( gameState === 1 ) {
        return 'Roll to play';
    } else {
        return Math.floor( Math.random() * 6 ) + 1; 
    }
}

export default NumberDisplay;