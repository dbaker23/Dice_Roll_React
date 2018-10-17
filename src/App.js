import React, { Component } from 'react';
import { RollButton } from './components/roll_button';
import './styles/index.css';
import NumberDisplay from './components/number_display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      gameState: 1,
      buttonText: 'Click me to roll!'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick( e ) {        
    this.setState({
      gameState: 2      
    });
  }

  render() {
    return (
      <div className="App">
        <RollButton handleClick={ this.handleClick } buttonText={ this.state.buttonText }/>
        <NumberDisplay gameState={ this.state.gameState } />
      </div>
    );
  }
}

export default App;
