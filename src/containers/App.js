import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField, requestRobots} from '../actions';

/////////connect(mapStateToProps, mapDispatchToProps)///////////////////////

// What state it needs to listen to and send down as props
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}
// Single Reducer => state.searchField / Multiple Reducers you have to state the reducer to point to state.searchRobots.searchField
// That's because you have only ONE reducer  existing in createStore() .  So that store directly refers to only one reducer (searchRobots) which returns the state searchField.  When you have multiple reducers you COMBINE them into one rootReducer and this rootReducer returns multiple reducers, if you want to refer to the state of one of them you have to grab them by reducers name... So to sum it up: if you refer in createStore() directly to the one reducer  you grab it's state throug state.stateName (in your case state.searchField) , but if you refer in createStore() to one rootReducer, which contains multiple combined reducers and returns them(not their state), you grab each state like this:  state.reducerName.stateName (in your case, when you will add more reducers and combine them in one root reducer it will be state.searchRobots.searchField) Hope that helped

// What props it should listen to that are actions, then dispatch it to the reducers as a prop function(onSearchChange(event))
const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())//Is the same as requestRobots(dispatch
  }
}
/////////////////////////////////////////////////////////////////////////////


class App extends Component {
 
  componentDidMount() {
    this.props.onRequestRobots();
  } 

  render() {

    const { searchField, onSearchChange, robots, isPending } = this.props; /* From connect(properties at top)*/
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='mt5 f2'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);