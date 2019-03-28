import React, {Component} from 'react';

class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
// A better example of shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState){//
        if (this.state.count !== nextState.count){ //Only update if our state count is different to our nextState.count => our count changes
    return true
    }else return false;
        }
    
    updateCount = () => {
        this.setState(state => { // The recommended way to update state Not this.setState({count:this.state.count + 1})
            return {count: this.state.count + 1}
        });
    }

    render(){
        console.log('CounterButton');
        return  (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;