import React from 'react';

const randomRoll = (gameState) => {
    if( gameState === 1 ) {
        return <p>Roll to play</p>;
    } else {
        const playerRoll = Math.floor( Math.random() * 6 ) + 1;
        const computerRoll = Math.floor( Math.random() * 6 ) + 1;
        const winner = playerRoll > computerRoll ? 'You win!' : 'You lose!';
        return (
            <div>
                <p>
                    <span>You: {playerRoll}</span>                    
                    <span>Computer: {computerRoll}</span>
                </p>
                <p>{winner}</p>
            </div>
        ); 
    }
}

const NumberDisplay = ({gameState}) => {  
    return randomRoll(gameState);
};

export default NumberDisplay;