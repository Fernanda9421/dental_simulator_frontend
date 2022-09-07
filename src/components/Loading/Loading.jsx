import React from 'react';
import { CircleLoader } from 'react-spinners';

function Loading() {
  const override = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    marginTop: '-25px',
    left: '50%',
    marginLeft: '-50px',
    borderColor: 'purple',
  };

  return (
    <div className='sweet-loading'>
      <CircleLoader
        cssOverride={override}
        size={100}
        color={'#123abc'}
        speedMultiplier={1.5}
      />
    </div>
  );
}

export default Loading;
