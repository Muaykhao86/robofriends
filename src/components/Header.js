import React, {Component} from 'react';
import CounterButton from '../components/CounterButton';


class Header extends Component {
//To stop rerendering
    shouldComponentUpdate(nextProps, nextState){//Default params/just showing eg
        return false //Default is true so we set it to false => NEVER UPDATE THIS COMPONENT
    }
    render(){
        console.log('Header');
        return  (
        <div className="">
        <h1 className='mt5 f2'>RoboFriends</h1>
        {/* <CounterButton color={'red'}/> */}
        </div>
        )
    }
}

export default Header;