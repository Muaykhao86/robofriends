import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='bh2 dib br4 pa3 pv4 ma2 bw2 hoverGlow backGradient'>
        <img alt='robots' src={`https://robohash.org/bgset_bg1/5?size=200x200`} />
        <h2 className='f5 mt4 lightest-blue'>Welcome To RoboFriends!!</h2>
        <p className='f5 lightest-blue'>Follow the link to find our collection of robots ready for action!</p>
        <Link to="/App" >Go to Robots</Link>
    </div>
  );
}

export default Home;
