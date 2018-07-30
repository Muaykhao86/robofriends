import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bh2 bg-light-green dib br4 pa3 pv4 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/bgset_bg1/${id}?size=200x200`} />
      <div>
        <h2 className='f5 mt4'>{name}</h2>
        <p className='f5'>{email}</p>
      </div>
    </div>
  );
}

export default Card;
