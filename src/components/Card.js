import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bh2 dib br4 pa3 pv4 ma2 grow bw2 hoverGlow backGradient'>
      <img alt='robots' src={`https://robohash.org/bgset_bg1/${id}?size=200x200`} />
      <div>
        <h2 className='f5 mt4 lightest-blue'>{name}</h2>
        <p className='f5 lightest-blue'>{email}</p>
      </div>
    </div>
  );
}

export default Card;
