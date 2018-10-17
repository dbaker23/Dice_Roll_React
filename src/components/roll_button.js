import React, { Component } from 'react';

export class RollButton extends Component {    
    render() {
        return (
            <div className="roll-button">
                <button onClick={this.props.handleClick}>
                {this.props.buttonText}
                </button>
            </div>
        );
    }
}

