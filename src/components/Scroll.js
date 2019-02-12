import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: 'none', height: '500px', padding: '2rem'}}>
      {props.children}
    </div>
  );
};

export default Scroll;