import React, { Component } from 'react';
import { RollButton } from './components/roll_button';
import './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      gameState: 1,
      buttonText: 'Click me to roll!'
    };
  }

  getGameState() {
    if( this.state.gameState != 1 ) {      
      this.setState.buttonText = 'Play again?';
    }
  }

  render() {
    return (
      <div className="App">
        <RollButton buttonText={ this.state.buttonText }/>
      </div>
    );
  }
}

export default App;
